const router = require('koa-router')();
const join = require("./modules/join/router");
const login = require('./modules/login/router');
const reg = require('./modules/reg/router');
const add = require('./modules/add/router');
const find = require('./modules/find/router');
const admin = require('./modules/admin/router');
const del = require('./modules/del/router');
const update = require('./modules/update/router');

module.exports = function(app,body,connection) {

    join(router, body, connection);
    login(router,body,connection);
    reg(router, body, connection);
    add(router, body, connection);
    find(router,body,connection);
    admin(router, body, connection);
    del(router,body,connection);
    update(router, body, connection);

    app.use(router.routes());

}