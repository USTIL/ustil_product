const mysql = require('mysql');
const koa  = require('koa');
const router = require('koa-router')();
const body = require('koa-body')();
const routes = require('./routes')
const cors = require('koa2-cors');
const serve = require('koa-static')
const convert = require('koa-convert');
const historyApiFallback = require('koa-history-api-fallback');
const conf = require('./conf.js');


const app = new koa();
app.use(cors());
app.use(convert(historyApiFallback()));
app.use(serve(__dirname + '/public'))
app.listen(conf.port,function(){
  console.log("fuck");
});
// app.use(bodyParser.json())
const connection = mysql.createConnection(conf.sql);
connection.connect();


routes(app, body, connection);

app
  .use(router.routes())
  .use(router.allowedMethods());

