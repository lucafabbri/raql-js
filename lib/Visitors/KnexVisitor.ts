import { Recognizer, RecognitionException } from "antlr4ts";
import { ANTLRErrorListener } from "antlr4ts/ANTLRErrorListener";
import { Knex } from "knex";
import { Bool_array_operationContext, Bool_operationContext, ClauseContext, Number_array_operationContext, Number_operationContext, OperationContext, String_array_operationContext, String_operationContext, String_operatorContext } from "../Grammar/RAQLParser";

export class KnexErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  valid = true;
  errorMessage = "";
  syntaxError<T extends TSymbol>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {
    this.valid = false;
    this.errorMessage = "The provided query in not well formed. line: " + line + ", position: " + charPositionInLine + ".\n" + msg;
  }
}

export class KnexVisitor<TRecord extends {} = any, TResult extends {} = unknown[]>{
  queryBuilder: Knex.QueryBuilder<TRecord, TResult>;
  constructor(queryBuilder: Knex.QueryBuilder<TRecord, TResult>) {
    this.queryBuilder = queryBuilder;
  }

  visitClause(ctx: ClauseContext, queryBuilder: Knex.QueryBuilder<TRecord, TResult> = this.queryBuilder, or: boolean = false): Knex.QueryBuilder<TRecord, TResult> {
    var conjunction = ctx.conjunction();
    var clauses = ctx.clause();
    var operation = ctx.operation();

    if (conjunction != null && clauses.length == 2) {
      var isOr = conjunction.text.toLowerCase().trim() === "or";
      var clause1 = this.visitClause(clauses[0], queryBuilder);
      var clause2 = this.visitClause(clauses[clauses.length - 1], queryBuilder);
      if (or) {
        queryBuilder.orWhere((builder) => this.visitClause(clauses[clauses.length - 1], this.visitClause(clauses[0], builder, false), isOr));
      } else {
        queryBuilder.where((builder) => this.visitClause(clauses[clauses.length - 1], this.visitClause(clauses[0], builder, false), isOr));
      }
    }
    else if (conjunction == null && clauses.length == 1) {
      this.visitClause(clauses[0], queryBuilder, or);
    }
    else if (conjunction == null && operation != null) {
      this.visitOperation(operation, queryBuilder, or);
    }

    return queryBuilder;
  }
  
  visitOperation(ctx: OperationContext, queryBuilder: Knex.QueryBuilder<TRecord, TResult>, or: boolean = false): Knex.QueryBuilder<TRecord, TResult> {
    
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
      return this.visitString_operation(stringOperation!!, queryBuilder, or);
    }
    else if (isStringArrayOperation) {
      return this.visitString_array_operation(stringArrayOperation!!, queryBuilder, or);
    }
    else if (isNumberOperation) {
      return this.visitNumber_operation(numberOperation!!, queryBuilder, or);

    }
    else if (isNumberArrayOperation) {
      return this.visitNumber_array_operation(numberArrayOperation!!, queryBuilder, or);

    }
    else if (isBoolOperation) {
      return this.visitBool_operation(boolOperation!!, queryBuilder, or);

    }
    else if (isBoolArrayOperation) {
      return this.visitBool_array_operation(boolArrayOperation!!, queryBuilder, or);

    }
    return queryBuilder;
  }

  visitString_array_operation(ctx: String_array_operationContext, queryBuilder: Knex.QueryBuilder<TRecord, TResult>, or: boolean = false): Knex.QueryBuilder<TRecord, TResult> {
    
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.array_operator().text.trim());
    var value = ctx.string_array()?.string().map(s => s.text.replace(/^\'+/, '').replace(/\'+$/, ''));

    if (field != null && value != null) {
      return queryBuilder.where(field, operator, value);
    }

    return queryBuilder;
  }

  visitNumber_array_operation(ctx: Number_array_operationContext, queryBuilder: Knex.QueryBuilder<TRecord, TResult>, or: boolean = false): Knex.QueryBuilder<TRecord, TResult> {
    
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.array_operator().text.trim());
    var numbers = ctx.number_array()?.number();

    if (field != null && numbers != null) {
      return queryBuilder.where(field, operator, numbers);
    }

    return queryBuilder;
  }

  visitBool_array_operation(ctx: Bool_array_operationContext, queryBuilder: Knex.QueryBuilder<TRecord, TResult>, or: boolean = false): Knex.QueryBuilder<TRecord, TResult> {
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.array_operator().text.trim());
    var value = ctx.bool_array()?.bool().map(s => s.text.toLowerCase() == "true");

    if (field != null && value != null) {
      return queryBuilder.where(field, operator, value);
    }

    return queryBuilder;
  }
  
  visitString_operation(ctx: String_operationContext, queryBuilder: Knex.QueryBuilder<TRecord, TResult>, or: boolean = false): Knex.QueryBuilder<TRecord, TResult> {
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.string_operator()?.text.toLowerCase().trim());
    var value = ctx.string()?.text.replace(/^\'+/, '').replace(/\'+$/, '');

    if (field != null && value != null) {
      queryBuilder.where(field, operator, value);
    }
    return queryBuilder;
  }
  
  visitNumber_operation(ctx: Number_operationContext, queryBuilder: Knex.QueryBuilder<TRecord, TResult>, or: boolean = false): Knex.QueryBuilder<TRecord, TResult> {
    
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.number_operator()?.text.toLowerCase().trim());
    var number = ctx.number()?.text;

    if (field != null && operator != null && number != null) {
      return queryBuilder.where(field, operator, number);
    }

    return queryBuilder;
  }
  
  visitBool_operation(ctx: Bool_operationContext, queryBuilder: Knex.QueryBuilder<TRecord, TResult>, or: boolean = false): Knex.QueryBuilder<TRecord, TResult> {
    var field = ctx.field()?.text;
    var operator = this.operatorToStandard(ctx.bool_operator()?.text.toLowerCase().trim());
    var value = ctx.bool()?.text == "true";

    if (field != null && operator != null) {
      return queryBuilder.where(field, operator, value);
    }

    return queryBuilder;
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