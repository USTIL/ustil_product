const pify = require('promise.ify');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

module.exports = function(router, body, connection) {
    router.post('/api/login',body,async (ctx) => {
	const sql = `select password from login
    where username = "${ctx.request.body.username}"`
    const pwd = await pify(connection.query,connection)(sql)
    console.log(md5(ctx.request.body.password) == pwd[0][0].password);
    const userToken = {
        username : ctx.request.body.username
    }
    if(md5(ctx.request.body.password) == pwd[0][0].password){
        ctx.body = {
            token:jwt.sign({user:userToken},'ustil')
        }
    }
    else{
        ctx.body = false;
    }
    console.log("hello");
    console.log(ctx.params);
    console.log(ctx.request.body);

    
    
})
}
