# RAQL.JS
## Installation

You can install the library from npm

#### NPM
```bash
npm i @higrow/raql.js
```
#### YARN
```bash
yarn add @higrow/raql.js
```
## Usage
### Knex.js
Change your Knex import with RAQLKnex (it is a wrapper around Knex for adding support to .raql(query))
```javascript
const { RAQLKnex } = require('@higrow/raql.js');
const database = RAQLKnex({
  client: 'sqlite3',
  connection: {
    filename: "vectors.db"
  },
});
```
Then you can use the extended .raql(query) method in your code.
```javascript
let query = "(x > 1 and x < 4) or (y >= 1 and y <=3)";
await database('vectors').raql(query);
```
