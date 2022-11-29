import { Recognizer, RecognitionException } from "antlr4ts";
import { ANTLRErrorListener } from "antlr4ts/ANTLRErrorListener";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Knex } from "knex";
import { Array_operatorContext, BoolContext, Bool_arrayContext, Bool_array_operationContext, Bool_operationContext, Bool_operatorContext, ClauseContext, ConjunctionContext, FieldContext, NullstringContext, NumberContext, Number_arrayContext, Number_array_operationContext, Number_operationContext, Number_operatorContext, OperationContext, RaqlContext, StringContext, String_arrayContext, String_array_operationContext, String_operationContext, String_operatorContext } from "../Grammar/RAQLParser";
import { RAQLVisitor } from "../Grammar/RAQLVisitor";

export class KnexErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  valid = true;
  errorMessage = "";
  syntaxError<T extends TSymbol>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {
    this.valid = false;
    this.errorMessage = "The provided query in not well formed. line: " + line + ", position: " + charPositionInLine + ".\n" + msg;
  }
}

export class KnexVisitor<TRecord extends {} = any, TResult extends {} = unknown[]> implements RAQLVisitor<Knex.QueryBuilder<TRecord, TResult>> {
  queryBuilder: Knex.QueryBuilder<TRecord, TResult>;
  constructor(queryBuilder: Knex.QueryBuilder<TRecord, TResult>) {
    this.queryBuilder = queryBuilder;
  }
  visitRaql?: ((ctx: RaqlContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitClause(ctx: ClauseContext): Knex.QueryBuilder<TRecord, TResult> {
    var conjunction = ctx.conjunction();
    var clauses = ctx.clause();
    var operation = ctx.operation();

    if (conjunction != null && clauses.length == 2) {
      var isAnd = conjunction.text.toLowerCase().trim() === "and";
      var clause1 = this.visitClause(clauses[0]);
      var clause2 = this.visitClause(clauses[clauses.length - 1]);
      return isAnd ? clause1.andWhere(clause2) : clause1.orWhere(clause2);
    }
    else if (conjunction == null && clauses.length == 1) {
      return this.visitClause(clauses[0]);
    }
    else if (conjunction == null && operation != null) {
      return this.visitOperation(operation);
    }

    return this.queryBuilder;
  }
  visitConjunction?: ((ctx: ConjunctionContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitOperation(ctx: OperationContext): Knex.QueryBuilder<TRecord, TResult> {
    
    var stringOperation = ctx.string_operation();
    var stringArrayOperation = ctx.string_array_operation();
    var numberOperation = ctx.number_operation();
    var numberArrayOperation = ctx.number_array_operation();
    var boolOperation = ctx.bool_operation();
    var boolArrayOperation = ctx.bool_array_operation();

    var isStringOperation = stringOperation != null;
    var isStringArrayOperation = stringArrayOperation != null;
    var isNumberOperation = numberOperation != null;
    var isNumberArrayOperation = numberArrayOperation != null;
    var isBoolOperation = boolOperation != null;
    var isBoolArrayOperation = boolArrayOperation != null;

    if (isStringOperation) {
      return this.visitString_operation(stringOperation!!);
    }
    else if (isStringArrayOperation) {
      return this.visitString_array_operation(stringArrayOperation!!);
    }
    else if (isNumberOperation) {
      return this.visitNumber_operation(numberOperation!!);

    }
    else if (isNumberArrayOperation) {
      return this.visitNumber_array_operation(numberArrayOperation!!);

    }
    else if (isBoolOperation) {
      return this.visitBool_operation(boolOperation!!);

    }
    else if (isBoolArrayOperation) {
      return this.visitBool_array_operation(boolArrayOperation!!);

    }
    return this.queryBuilder;
  }
  visitString_array_operation(ctx: String_array_operationContext): Knex.QueryBuilder<TRecord, TResult> {
    
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.array_operator().text.trim());
    var value = ctx.string_array()?.string().map(s => s.text.replace(/^\'+/, '').replace(/\'+$/, ''));

    if (field != null && value != null) {
      return this.queryBuilder.where(field, operator, value);
    }

    return this.queryBuilder;
  }
  visitNumber_array_operation(ctx: Number_array_operationContext): Knex.QueryBuilder<TRecord, TResult> {
    
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.array_operator().text.trim());
    var numbers = ctx.number_array()?.number();

    if (field != null && numbers != null) {
      return this.queryBuilder.where(field, operator, numbers);
    }

    return this.queryBuilder;
  }
  visitBool_array_operation(ctx: Bool_array_operationContext): Knex.QueryBuilder<TRecord, TResult> {
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.array_operator().text.trim());
    var value = ctx.bool_array()?.bool().map(s => s.text.toLowerCase() == "true");

    if (field != null && value != null) {
      return this.queryBuilder.where(field, operator, value);
    }

    return this.queryBuilder;
  }
  visitArray_operator?: ((ctx: Array_operatorContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitString_operation(ctx: String_operationContext): Knex.QueryBuilder<TRecord, TResult> {
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.string_operator()?.text.toLowerCase().trim());
    var value = ctx.string()?.text.replace(/^\'+/, '').replace(/\'+$/, '');

    if (field != null && value != null) {
      this.queryBuilder.where(field, operator, value);
    }
    return this.queryBuilder;
  }
  visitString_operator?: ((ctx: String_operatorContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitNumber_operation(ctx: Number_operationContext): Knex.QueryBuilder<TRecord, TResult> {
    
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.number_operator()?.text.toLowerCase().trim());
    var number = ctx.number()?.text;

    if (field != null && operator != null && number != null) {
      return this.queryBuilder.where(field, operator, number);
    }

    return this.queryBuilder;
  }
  visitNumber_operator?: ((ctx: Number_operatorContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitBool_operation(ctx: Bool_operationContext): Knex.QueryBuilder<TRecord, TResult> {
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.bool_operator()?.text.toLowerCase().trim());
    var value = ctx.bool()?.text == "true";

    if (field != null && operator != null) {
      return this.queryBuilder.where(field, operator, value);
    }

    return this.queryBuilder;
  }
  visitBool_operator?: ((ctx: Bool_operatorContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitField?: ((ctx: FieldContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitNullstring?: ((ctx: NullstringContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitString?: ((ctx: StringContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitString_array?: ((ctx: String_arrayContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitNumber?: ((ctx: NumberContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitNumber_array?: ((ctx: Number_arrayContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitBool?: ((ctx: BoolContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visitBool_array?: ((ctx: Bool_arrayContext) => Knex.QueryBuilder<TRecord, TResult>) | undefined;
  visit(tree: ParseTree): Knex.QueryBuilder<TRecord, TResult> {
    throw new Error('Method not implemented.');
  }
  visitChildren(node: RuleNode): Knex.QueryBuilder<TRecord, TResult> {
    throw new Error('Method not implemented.');
  }
  visitTerminal(node: TerminalNode): Knex.QueryBuilder<TRecord, TResult> {
    throw new Error('Method not implemented.');
  }
  visitErrorNode(node: ErrorNode): Knex.QueryBuilder<TRecord, TResult> {
    throw new Error('Method not implemented.');
  }

  operatorToStandard(operator: string): string {
    switch (operator) {
      case 'greater than':
        return '>';
      case 'lower than':
        return '<';
      case 'not equals':
        return '!=';
      case 'equals':
        return '=';
      default:
        return operator;
    }
  }
}