import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { RAQLLexer } from './Grammar/RAQLLexer';
import { RAQLParser } from './Grammar/RAQLParser';
import { KnexErrorListener, KnexVisitor } from './Visitors/KnexVisitor';
import { Token } from 'antlr4ts/Token';
import knex from 'knex';

export function RAQLKnex(config:any) {
  knex.QueryBuilder.extend('raql', function (query: string) {
    const chars = new ANTLRInputStream(query);
    const lexer = new RAQLLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new RAQLParser(tokens);
    var errorListner = new KnexErrorListener<Token>();
    parser.addErrorListener(errorListner);

    const tree = parser.raql();

    if (!errorListner.valid) {
      console.error(errorListner.errorMessage);
      return this.where(true);
    }

    return new KnexVisitor(this).visitClause(tree.clause());
  });
  return knex(config);
}
