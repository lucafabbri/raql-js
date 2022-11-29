import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { RAQLVisitor } from "./RAQLVisitor";
export declare class RAQLParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly IN = 7;
    static readonly BASE_OPERATOR = 8;
    static readonly STRING_OPERATOR = 9;
    static readonly NUMBER_OPERATOR = 10;
    static readonly CONJUNCTIONS = 11;
    static readonly NUMBER = 12;
    static readonly WORD = 13;
    static readonly STRING = 14;
    static readonly BOOLEAN = 15;
    static readonly NULL = 16;
    static readonly RULE_raql = 0;
    static readonly RULE_clause = 1;
    static readonly RULE_conjunction = 2;
    static readonly RULE_operation = 3;
    static readonly RULE_string_array_operation = 4;
    static readonly RULE_number_array_operation = 5;
    static readonly RULE_bool_array_operation = 6;
    static readonly RULE_array_operator = 7;
    static readonly RULE_string_operation = 8;
    static readonly RULE_string_operator = 9;
    static readonly RULE_number_operation = 10;
    static readonly RULE_number_operator = 11;
    static readonly RULE_bool_operation = 12;
    static readonly RULE_bool_operator = 13;
    static readonly RULE_field = 14;
    static readonly RULE_nullstring = 15;
    static readonly RULE_string = 16;
    static readonly RULE_string_array = 17;
    static readonly RULE_number = 18;
    static readonly RULE_number_array = 19;
    static readonly RULE_bool = 20;
    static readonly RULE_bool_array = 21;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    raql(): RaqlContext;
    clause(): ClauseContext;
    clause(_p: number): ClauseContext;
    conjunction(): ConjunctionContext;
    operation(): OperationContext;
    string_array_operation(): String_array_operationContext;
    number_array_operation(): Number_array_operationContext;
    bool_array_operation(): Bool_array_operationContext;
    array_operator(): Array_operatorContext;
    string_operation(): String_operationContext;
    string_operator(): String_operatorContext;
    number_operation(): Number_operationContext;
    number_operator(): Number_operatorContext;
    bool_operation(): Bool_operationContext;
    bool_operator(): Bool_operatorContext;
    field(): FieldContext;
    nullstring(): NullstringContext;
    string(): StringContext;
    string_array(): String_arrayContext;
    number(): NumberContext;
    number_array(): Number_arrayContext;
    bool(): BoolContext;
    bool_array(): Bool_arrayContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private clause_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class RaqlContext extends ParserRuleContext {
    clause(): ClauseContext;
    EOF(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class ClauseContext extends ParserRuleContext {
    operation(): OperationContext | undefined;
    clause(): ClauseContext[];
    clause(i: number): ClauseContext;
    conjunction(): ConjunctionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class ConjunctionContext extends ParserRuleContext {
    CONJUNCTIONS(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class OperationContext extends ParserRuleContext {
    bool_array_operation(): Bool_array_operationContext | undefined;
    number_array_operation(): Number_array_operationContext | undefined;
    string_array_operation(): String_array_operationContext | undefined;
    bool_operation(): Bool_operationContext | undefined;
    number_operation(): Number_operationContext | undefined;
    string_operation(): String_operationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class String_array_operationContext extends ParserRuleContext {
    field(): FieldContext;
    array_operator(): Array_operatorContext;
    string_array(): String_arrayContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class Number_array_operationContext extends ParserRuleContext {
    field(): FieldContext;
    array_operator(): Array_operatorContext;
    number_array(): Number_arrayContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class Bool_array_operationContext extends ParserRuleContext {
    field(): FieldContext;
    array_operator(): Array_operatorContext;
    bool_array(): Bool_arrayContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class Array_operatorContext extends ParserRuleContext {
    IN(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class String_operationContext extends ParserRuleContext {
    field(): FieldContext;
    string_operator(): String_operatorContext;
    string(): StringContext | undefined;
    nullstring(): NullstringContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class String_operatorContext extends ParserRuleContext {
    BASE_OPERATOR(): TerminalNode | undefined;
    STRING_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class Number_operationContext extends ParserRuleContext {
    field(): FieldContext;
    number_operator(): Number_operatorContext;
    number(): NumberContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class Number_operatorContext extends ParserRuleContext {
    BASE_OPERATOR(): TerminalNode | undefined;
    NUMBER_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class Bool_operationContext extends ParserRuleContext {
    field(): FieldContext;
    bool_operator(): Bool_operatorContext;
    bool(): BoolContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class Bool_operatorContext extends ParserRuleContext {
    BASE_OPERATOR(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class FieldContext extends ParserRuleContext {
    WORD(): TerminalNode[];
    WORD(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class NullstringContext extends ParserRuleContext {
    NULL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class StringContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class String_arrayContext extends ParserRuleContext {
    string(): StringContext[];
    string(i: number): StringContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class NumberContext extends ParserRuleContext {
    NUMBER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class Number_arrayContext extends ParserRuleContext {
    number(): NumberContext[];
    number(i: number): NumberContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class BoolContext extends ParserRuleContext {
    BOOLEAN(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
export declare class Bool_arrayContext extends ParserRuleContext {
    bool(): BoolContext[];
    bool(i: number): BoolContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: RAQLVisitor<Result>): Result;
}
