import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RaqlContext } from "./RAQLParser";
import { ClauseContext } from "./RAQLParser";
import { ConjunctionContext } from "./RAQLParser";
import { OperationContext } from "./RAQLParser";
import { String_array_operationContext } from "./RAQLParser";
import { Number_array_operationContext } from "./RAQLParser";
import { Bool_array_operationContext } from "./RAQLParser";
import { Array_operatorContext } from "./RAQLParser";
import { String_operationContext } from "./RAQLParser";
import { String_operatorContext } from "./RAQLParser";
import { Number_operationContext } from "./RAQLParser";
import { Number_operatorContext } from "./RAQLParser";
import { Bool_operationContext } from "./RAQLParser";
import { Bool_operatorContext } from "./RAQLParser";
import { FieldContext } from "./RAQLParser";
import { NullstringContext } from "./RAQLParser";
import { StringContext } from "./RAQLParser";
import { String_arrayContext } from "./RAQLParser";
import { NumberContext } from "./RAQLParser";
import { Number_arrayContext } from "./RAQLParser";
import { BoolContext } from "./RAQLParser";
import { Bool_arrayContext } from "./RAQLParser";
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RAQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RAQLVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `RAQLParser.raql`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRaql?: (ctx: RaqlContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClause?: (ctx: ClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.conjunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConjunction?: (ctx: ConjunctionContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperation?: (ctx: OperationContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.string_array_operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString_array_operation?: (ctx: String_array_operationContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.number_array_operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber_array_operation?: (ctx: Number_array_operationContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.bool_array_operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBool_array_operation?: (ctx: Bool_array_operationContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.array_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArray_operator?: (ctx: Array_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.string_operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString_operation?: (ctx: String_operationContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.string_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString_operator?: (ctx: String_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.number_operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber_operation?: (ctx: Number_operationContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.number_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber_operator?: (ctx: Number_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.bool_operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBool_operation?: (ctx: Bool_operationContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.bool_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBool_operator?: (ctx: Bool_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.field`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField?: (ctx: FieldContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.nullstring`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullstring?: (ctx: NullstringContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString?: (ctx: StringContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.string_array`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString_array?: (ctx: String_arrayContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber?: (ctx: NumberContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.number_array`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber_array?: (ctx: Number_arrayContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.bool`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBool?: (ctx: BoolContext) => Result;
    /**
     * Visit a parse tree produced by `RAQLParser.bool_array`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBool_array?: (ctx: Bool_arrayContext) => Result;
}
