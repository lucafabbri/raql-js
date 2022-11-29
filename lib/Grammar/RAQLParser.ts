// Generated from c:\Users\lfabbri\projects\api-query-language\raql-ts\RAQL.TS\RAQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { RAQLVisitor } from "./RAQLVisitor";


export class RAQLParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly IN = 7;
	public static readonly BASE_OPERATOR = 8;
	public static readonly STRING_OPERATOR = 9;
	public static readonly NUMBER_OPERATOR = 10;
	public static readonly CONJUNCTIONS = 11;
	public static readonly NUMBER = 12;
	public static readonly WORD = 13;
	public static readonly STRING = 14;
	public static readonly BOOLEAN = 15;
	public static readonly NULL = 16;
	public static readonly RULE_raql = 0;
	public static readonly RULE_clause = 1;
	public static readonly RULE_conjunction = 2;
	public static readonly RULE_operation = 3;
	public static readonly RULE_string_array_operation = 4;
	public static readonly RULE_number_array_operation = 5;
	public static readonly RULE_bool_array_operation = 6;
	public static readonly RULE_array_operator = 7;
	public static readonly RULE_string_operation = 8;
	public static readonly RULE_string_operator = 9;
	public static readonly RULE_number_operation = 10;
	public static readonly RULE_number_operator = 11;
	public static readonly RULE_bool_operation = 12;
	public static readonly RULE_bool_operator = 13;
	public static readonly RULE_field = 14;
	public static readonly RULE_nullstring = 15;
	public static readonly RULE_string = 16;
	public static readonly RULE_string_array = 17;
	public static readonly RULE_number = 18;
	public static readonly RULE_number_array = 19;
	public static readonly RULE_bool = 20;
	public static readonly RULE_bool_array = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"raql", "clause", "conjunction", "operation", "string_array_operation", 
		"number_array_operation", "bool_array_operation", "array_operator", "string_operation", 
		"string_operator", "number_operation", "number_operator", "bool_operation", 
		"bool_operator", "field", "nullstring", "string", "string_array", "number", 
		"number_array", "bool", "bool_array",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "' '", "')'", "'['", "','", "']'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"IN", "BASE_OPERATOR", "STRING_OPERATOR", "NUMBER_OPERATOR", "CONJUNCTIONS", 
		"NUMBER", "WORD", "STRING", "BOOLEAN", "NULL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RAQLParser._LITERAL_NAMES, RAQLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RAQLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RAQL.g4"; }

	// @Override
	public get ruleNames(): string[] { return RAQLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RAQLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RAQLParser._ATN, this);
	}
	// @RuleVersion(0)
	public raql(): RaqlContext {
		let _localctx: RaqlContext = new RaqlContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RAQLParser.RULE_raql);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.clause(0);
			this.state = 45;
			this.match(RAQLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public clause(): ClauseContext;
	public clause(_p: number): ClauseContext;
	// @RuleVersion(0)
	public clause(_p?: number): ClauseContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ClauseContext = new ClauseContext(this._ctx, _parentState);
		let _prevctx: ClauseContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, RAQLParser.RULE_clause, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RAQLParser.IN:
			case RAQLParser.BASE_OPERATOR:
			case RAQLParser.STRING_OPERATOR:
			case RAQLParser.NUMBER_OPERATOR:
			case RAQLParser.WORD:
				{
				this.state = 48;
				this.operation();
				}
				break;
			case RAQLParser.T__0:
				{
				this.state = 49;
				this.match(RAQLParser.T__0);
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RAQLParser.T__1) {
					{
					this.state = 50;
					this.match(RAQLParser.T__1);
					}
				}

				this.state = 53;
				this.clause(0);
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RAQLParser.T__1) {
					{
					this.state = 54;
					this.match(RAQLParser.T__1);
					}
				}

				this.state = 57;
				this.match(RAQLParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 67;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ClauseContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, RAQLParser.RULE_clause);
					this.state = 61;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 62;
					this.conjunction();
					this.state = 63;
					this.clause(2);
					}
					}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conjunction(): ConjunctionContext {
		let _localctx: ConjunctionContext = new ConjunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RAQLParser.RULE_conjunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(RAQLParser.CONJUNCTIONS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operation(): OperationContext {
		let _localctx: OperationContext = new OperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RAQLParser.RULE_operation);
		try {
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 72;
				this.bool_array_operation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 73;
				this.number_array_operation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 74;
				this.string_array_operation();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 75;
				this.bool_operation();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 76;
				this.number_operation();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 77;
				this.string_operation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_array_operation(): String_array_operationContext {
		let _localctx: String_array_operationContext = new String_array_operationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RAQLParser.RULE_string_array_operation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.field();
			this.state = 81;
			this.array_operator();
			this.state = 82;
			this.string_array();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_array_operation(): Number_array_operationContext {
		let _localctx: Number_array_operationContext = new Number_array_operationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RAQLParser.RULE_number_array_operation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.field();
			this.state = 85;
			this.array_operator();
			this.state = 86;
			this.number_array();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool_array_operation(): Bool_array_operationContext {
		let _localctx: Bool_array_operationContext = new Bool_array_operationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RAQLParser.RULE_bool_array_operation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.field();
			this.state = 89;
			this.array_operator();
			this.state = 90;
			this.bool_array();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_operator(): Array_operatorContext {
		let _localctx: Array_operatorContext = new Array_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RAQLParser.RULE_array_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(RAQLParser.IN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_operation(): String_operationContext {
		let _localctx: String_operationContext = new String_operationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RAQLParser.RULE_string_operation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.field();
			this.state = 95;
			this.string_operator();
			this.state = 98;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RAQLParser.STRING:
				{
				this.state = 96;
				this.string();
				}
				break;
			case RAQLParser.NULL:
				{
				this.state = 97;
				this.nullstring();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_operator(): String_operatorContext {
		let _localctx: String_operatorContext = new String_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RAQLParser.RULE_string_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			_la = this._input.LA(1);
			if (!(_la === RAQLParser.BASE_OPERATOR || _la === RAQLParser.STRING_OPERATOR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_operation(): Number_operationContext {
		let _localctx: Number_operationContext = new Number_operationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RAQLParser.RULE_number_operation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.field();
			this.state = 103;
			this.number_operator();
			this.state = 104;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_operator(): Number_operatorContext {
		let _localctx: Number_operatorContext = new Number_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RAQLParser.RULE_number_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			_la = this._input.LA(1);
			if (!(_la === RAQLParser.BASE_OPERATOR || _la === RAQLParser.NUMBER_OPERATOR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool_operation(): Bool_operationContext {
		let _localctx: Bool_operationContext = new Bool_operationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RAQLParser.RULE_bool_operation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.field();
			this.state = 109;
			this.bool_operator();
			this.state = 110;
			this.bool();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool_operator(): Bool_operatorContext {
		let _localctx: Bool_operatorContext = new Bool_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RAQLParser.RULE_bool_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(RAQLParser.BASE_OPERATOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RAQLParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RAQLParser.WORD) {
				{
				{
				this.state = 114;
				this.match(RAQLParser.WORD);
				}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nullstring(): NullstringContext {
		let _localctx: NullstringContext = new NullstringContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RAQLParser.RULE_nullstring);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(RAQLParser.NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RAQLParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(RAQLParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_array(): String_arrayContext {
		let _localctx: String_arrayContext = new String_arrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RAQLParser.RULE_string_array);
		let _la: number;
		try {
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.match(RAQLParser.T__3);
				this.state = 125;
				this.string();
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RAQLParser.T__4) {
					{
					{
					this.state = 126;
					this.match(RAQLParser.T__4);
					this.state = 127;
					this.string();
					}
					}
					this.state = 132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 133;
				this.match(RAQLParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 135;
				this.match(RAQLParser.T__3);
				this.state = 136;
				this.match(RAQLParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RAQLParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.match(RAQLParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_array(): Number_arrayContext {
		let _localctx: Number_arrayContext = new Number_arrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RAQLParser.RULE_number_array);
		let _la: number;
		try {
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 141;
				this.match(RAQLParser.T__3);
				this.state = 142;
				this.number();
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RAQLParser.T__4) {
					{
					{
					this.state = 143;
					this.match(RAQLParser.T__4);
					this.state = 144;
					this.number();
					}
					}
					this.state = 149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 150;
				this.match(RAQLParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 152;
				this.match(RAQLParser.T__3);
				this.state = 153;
				this.match(RAQLParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RAQLParser.RULE_bool);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(RAQLParser.BOOLEAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool_array(): Bool_arrayContext {
		let _localctx: Bool_arrayContext = new Bool_arrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, RAQLParser.RULE_bool_array);
		let _la: number;
		try {
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 158;
				this.match(RAQLParser.T__3);
				this.state = 159;
				this.bool();
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RAQLParser.T__4) {
					{
					{
					this.state = 160;
					this.match(RAQLParser.T__4);
					this.state = 161;
					this.bool();
					}
					}
					this.state = 166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 167;
				this.match(RAQLParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.match(RAQLParser.T__3);
				this.state = 170;
				this.match(RAQLParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.clause_sempred(_localctx as ClauseContext, predIndex);
		}
		return true;
	}
	private clause_sempred(_localctx: ClauseContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12\xB0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x036\n\x03\x03" +
		"\x03\x03\x03\x05\x03:\n\x03\x03\x03\x03\x03\x05\x03>\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03D\n\x03\f\x03\x0E\x03G\v\x03\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05Q\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\ne\n\n\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x10\x07\x10v\n\x10\f\x10\x0E\x10y\v\x10\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\x83\n\x13\f\x13\x0E" +
		"\x13\x86\v\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\x8C\n\x13\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\x94\n\x15\f\x15\x0E\x15" +
		"\x97\v\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\x9D\n\x15\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\xA5\n\x17\f\x17\x0E\x17\xA8" +
		"\v\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\xAE\n\x17\x03\x17\x02\x02" +
		"\x03\x04\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02\x02\x04\x03\x02\n\v\x04\x02\n\n\f\f\x02\xAA\x02." +
		"\x03\x02\x02\x02\x04=\x03\x02\x02\x02\x06H\x03\x02\x02\x02\bP\x03\x02" +
		"\x02\x02\nR\x03\x02\x02\x02\fV\x03\x02\x02\x02\x0EZ\x03\x02\x02\x02\x10" +
		"^\x03\x02\x02\x02\x12`\x03\x02\x02\x02\x14f\x03\x02\x02\x02\x16h\x03\x02" +
		"\x02\x02\x18l\x03\x02\x02\x02\x1An\x03\x02\x02\x02\x1Cr\x03\x02\x02\x02" +
		"\x1Ew\x03\x02\x02\x02 z\x03\x02\x02\x02\"|\x03\x02\x02\x02$\x8B\x03\x02" +
		"\x02\x02&\x8D\x03\x02\x02\x02(\x9C\x03\x02\x02\x02*\x9E\x03\x02\x02\x02" +
		",\xAD\x03\x02\x02\x02./\x05\x04\x03\x02/0\x07\x02\x02\x030\x03\x03\x02" +
		"\x02\x0212\b\x03\x01\x022>\x05\b\x05\x0235\x07\x03\x02\x0246\x07\x04\x02" +
		"\x0254\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02\x02\x0279\x05\x04\x03" +
		"\x028:\x07\x04\x02\x0298\x03\x02\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02" +
		"\x02;<\x07\x05\x02\x02<>\x03\x02\x02\x02=1\x03\x02\x02\x02=3\x03\x02\x02" +
		"\x02>E\x03\x02\x02\x02?@\f\x03\x02\x02@A\x05\x06\x04\x02AB\x05\x04\x03" +
		"\x04BD\x03\x02\x02\x02C?\x03\x02\x02\x02DG\x03\x02\x02\x02EC\x03\x02\x02" +
		"\x02EF\x03\x02\x02\x02F\x05\x03\x02\x02\x02GE\x03\x02\x02\x02HI\x07\r" +
		"\x02\x02I\x07\x03\x02\x02\x02JQ\x05\x0E\b\x02KQ\x05\f\x07\x02LQ\x05\n" +
		"\x06\x02MQ\x05\x1A\x0E\x02NQ\x05\x16\f\x02OQ\x05\x12\n\x02PJ\x03\x02\x02" +
		"\x02PK\x03\x02\x02\x02PL\x03\x02\x02\x02PM\x03\x02\x02\x02PN\x03\x02\x02" +
		"\x02PO\x03\x02\x02\x02Q\t\x03\x02\x02\x02RS\x05\x1E\x10\x02ST\x05\x10" +
		"\t\x02TU\x05$\x13\x02U\v\x03\x02\x02\x02VW\x05\x1E\x10\x02WX\x05\x10\t" +
		"\x02XY\x05(\x15\x02Y\r\x03\x02\x02\x02Z[\x05\x1E\x10\x02[\\\x05\x10\t" +
		"\x02\\]\x05,\x17\x02]\x0F\x03\x02\x02\x02^_\x07\t\x02\x02_\x11\x03\x02" +
		"\x02\x02`a\x05\x1E\x10\x02ad\x05\x14\v\x02be\x05\"\x12\x02ce\x05 \x11" +
		"\x02db\x03\x02\x02\x02dc\x03\x02\x02\x02e\x13\x03\x02\x02\x02fg\t\x02" +
		"\x02\x02g\x15\x03\x02\x02\x02hi\x05\x1E\x10\x02ij\x05\x18\r\x02jk\x05" +
		"&\x14\x02k\x17\x03\x02\x02\x02lm\t\x03\x02\x02m\x19\x03\x02\x02\x02no" +
		"\x05\x1E\x10\x02op\x05\x1C\x0F\x02pq\x05*\x16\x02q\x1B\x03\x02\x02\x02" +
		"rs\x07\n\x02\x02s\x1D\x03\x02\x02\x02tv\x07\x0F\x02\x02ut\x03\x02\x02" +
		"\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x\x1F\x03\x02" +
		"\x02\x02yw\x03\x02\x02\x02z{\x07\x12\x02\x02{!\x03\x02\x02\x02|}\x07\x10" +
		"\x02\x02}#\x03\x02\x02\x02~\x7F\x07\x06\x02\x02\x7F\x84\x05\"\x12\x02" +
		"\x80\x81\x07\x07\x02\x02\x81\x83\x05\"\x12\x02\x82\x80\x03\x02\x02\x02" +
		"\x83\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02" +
		"\x85\x87\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x87\x88\x07\b\x02\x02" +
		"\x88\x8C\x03\x02\x02\x02\x89\x8A\x07\x06\x02\x02\x8A\x8C\x07\b\x02\x02" +
		"\x8B~\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C%\x03\x02\x02\x02\x8D" +
		"\x8E\x07\x0E\x02\x02\x8E\'\x03\x02\x02\x02\x8F\x90\x07\x06\x02\x02\x90" +
		"\x95\x05&\x14\x02\x91\x92\x07\x07\x02\x02\x92\x94\x05&\x14\x02\x93\x91" +
		"\x03\x02\x02\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96" +
		"\x03\x02\x02\x02\x96\x98\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\x99" +
		"\x07\b\x02\x02\x99\x9D\x03\x02\x02\x02\x9A\x9B\x07\x06\x02\x02\x9B\x9D" +
		"\x07\b\x02\x02\x9C\x8F\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D)\x03" +
		"\x02\x02\x02\x9E\x9F\x07\x11\x02\x02\x9F+\x03\x02\x02\x02\xA0\xA1\x07" +
		"\x06\x02\x02\xA1\xA6\x05*\x16\x02\xA2\xA3\x07\x07\x02\x02\xA3\xA5\x05" +
		"*\x16\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03" +
		"\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03\x02\x02\x02\xA8\xA6\x03" +
		"\x02\x02\x02\xA9\xAA\x07\b\x02\x02\xAA\xAE\x03\x02\x02\x02\xAB\xAC\x07" +
		"\x06\x02\x02\xAC\xAE\x07\b\x02\x02\xAD\xA0\x03\x02\x02\x02\xAD\xAB\x03" +
		"\x02\x02\x02\xAE-\x03\x02\x02\x02\x0F59=EPdw\x84\x8B\x95\x9C\xA6\xAD";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RAQLParser.__ATN) {
			RAQLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RAQLParser._serializedATN));
		}

		return RAQLParser.__ATN;
	}

}

export class RaqlContext extends ParserRuleContext {
	public clause(): ClauseContext {
		return this.getRuleContext(0, ClauseContext);
	}
	public EOF(): TerminalNode { return this.getToken(RAQLParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_raql; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitRaql) {
			return visitor.visitRaql(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClauseContext extends ParserRuleContext {
	public operation(): OperationContext | undefined {
		return this.tryGetRuleContext(0, OperationContext);
	}
	public clause(): ClauseContext[];
	public clause(i: number): ClauseContext;
	public clause(i?: number): ClauseContext | ClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClauseContext);
		} else {
			return this.getRuleContext(i, ClauseContext);
		}
	}
	public conjunction(): ConjunctionContext | undefined {
		return this.tryGetRuleContext(0, ConjunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_clause; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitClause) {
			return visitor.visitClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConjunctionContext extends ParserRuleContext {
	public CONJUNCTIONS(): TerminalNode { return this.getToken(RAQLParser.CONJUNCTIONS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_conjunction; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitConjunction) {
			return visitor.visitConjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperationContext extends ParserRuleContext {
	public bool_array_operation(): Bool_array_operationContext | undefined {
		return this.tryGetRuleContext(0, Bool_array_operationContext);
	}
	public number_array_operation(): Number_array_operationContext | undefined {
		return this.tryGetRuleContext(0, Number_array_operationContext);
	}
	public string_array_operation(): String_array_operationContext | undefined {
		return this.tryGetRuleContext(0, String_array_operationContext);
	}
	public bool_operation(): Bool_operationContext | undefined {
		return this.tryGetRuleContext(0, Bool_operationContext);
	}
	public number_operation(): Number_operationContext | undefined {
		return this.tryGetRuleContext(0, Number_operationContext);
	}
	public string_operation(): String_operationContext | undefined {
		return this.tryGetRuleContext(0, String_operationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_operation; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitOperation) {
			return visitor.visitOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_array_operationContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public array_operator(): Array_operatorContext {
		return this.getRuleContext(0, Array_operatorContext);
	}
	public string_array(): String_arrayContext {
		return this.getRuleContext(0, String_arrayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_string_array_operation; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitString_array_operation) {
			return visitor.visitString_array_operation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Number_array_operationContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public array_operator(): Array_operatorContext {
		return this.getRuleContext(0, Array_operatorContext);
	}
	public number_array(): Number_arrayContext {
		return this.getRuleContext(0, Number_arrayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_number_array_operation; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitNumber_array_operation) {
			return visitor.visitNumber_array_operation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_array_operationContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public array_operator(): Array_operatorContext {
		return this.getRuleContext(0, Array_operatorContext);
	}
	public bool_array(): Bool_arrayContext {
		return this.getRuleContext(0, Bool_arrayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_bool_array_operation; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitBool_array_operation) {
			return visitor.visitBool_array_operation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_operatorContext extends ParserRuleContext {
	public IN(): TerminalNode { return this.getToken(RAQLParser.IN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_array_operator; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitArray_operator) {
			return visitor.visitArray_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_operationContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public string_operator(): String_operatorContext {
		return this.getRuleContext(0, String_operatorContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public nullstring(): NullstringContext | undefined {
		return this.tryGetRuleContext(0, NullstringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_string_operation; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitString_operation) {
			return visitor.visitString_operation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_operatorContext extends ParserRuleContext {
	public BASE_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(RAQLParser.BASE_OPERATOR, 0); }
	public STRING_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(RAQLParser.STRING_OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_string_operator; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitString_operator) {
			return visitor.visitString_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Number_operationContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public number_operator(): Number_operatorContext {
		return this.getRuleContext(0, Number_operatorContext);
	}
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_number_operation; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitNumber_operation) {
			return visitor.visitNumber_operation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Number_operatorContext extends ParserRuleContext {
	public BASE_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(RAQLParser.BASE_OPERATOR, 0); }
	public NUMBER_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(RAQLParser.NUMBER_OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_number_operator; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitNumber_operator) {
			return visitor.visitNumber_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_operationContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public bool_operator(): Bool_operatorContext {
		return this.getRuleContext(0, Bool_operatorContext);
	}
	public bool(): BoolContext {
		return this.getRuleContext(0, BoolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_bool_operation; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitBool_operation) {
			return visitor.visitBool_operation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_operatorContext extends ParserRuleContext {
	public BASE_OPERATOR(): TerminalNode { return this.getToken(RAQLParser.BASE_OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_bool_operator; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitBool_operator) {
			return visitor.visitBool_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RAQLParser.WORD);
		} else {
			return this.getToken(RAQLParser.WORD, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_field; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NullstringContext extends ParserRuleContext {
	public NULL(): TerminalNode { return this.getToken(RAQLParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_nullstring; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitNullstring) {
			return visitor.visitNullstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(RAQLParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_string; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_arrayContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_string_array; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitString_array) {
			return visitor.visitString_array(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(RAQLParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_number; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Number_arrayContext extends ParserRuleContext {
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_number_array; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitNumber_array) {
			return visitor.visitNumber_array(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode { return this.getToken(RAQLParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_bool; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_arrayContext extends ParserRuleContext {
	public bool(): BoolContext[];
	public bool(i: number): BoolContext;
	public bool(i?: number): BoolContext | BoolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BoolContext);
		} else {
			return this.getRuleContext(i, BoolContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RAQLParser.RULE_bool_array; }
	// @Override
	public accept<Result>(visitor: RAQLVisitor<Result>): Result {
		if (visitor.visitBool_array) {
			return visitor.visitBool_array(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


