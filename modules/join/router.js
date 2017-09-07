const pify = require('promise.ify');

module.exports = function(router, body, connection) {
    
    

    router.post('/api/user',body,async (ctx) => {
    const sql = `insert into user (name,num,phone,ext,wand) values ( "${ctx.request.body.name}","${ctx.request.body.num}","${ctx.request.body.phone}","${ctx.request.body.ext}","${ctx.request.body.wand}" )`

    console.log("hello");
    console.log(ctx.params);
    console.log(ctx.request.body);

    const insert = await pify(connection.query,connection)(sql)
    
})
}

