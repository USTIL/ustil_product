const pify = require('promise.ify');
const md5 = require('md5');
module.exports = function(router, body, connection) {
    
    

    router.post('/api/reg',body,async (ctx) => {
    const sql = `insert into login (username, password) values 
    ( "${ctx.request.body.username}",md5('${ctx.request.body.password}') )`

    const sql1 = `select admin from admin`
    const rid = await pify(connection.query,connection)(sql1)
    console.log(ctx.request.body.id, rid[0][0].admin)
    if(ctx.request.body.id == rid[0][0].admin)
    {
        const insert = await pify(connection.query,connection)(sql)
        console.log(insert);
        ctx.body = true;
    }
    else{
        ctx.body = false;
        console.log('error');
    }
    console.log("hello");
    console.log(ctx.params);
    console.log(ctx.request.body);
})
}