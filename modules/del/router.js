const pify = require('promise.ify');

module.exports = function(router, body, connection) {
    
    router.post('/api/del',body,async (ctx) => {
        console.log(ctx.request.body.name)
        const sql = `delete from people where name = "${ctx.request.body.name}"`
        const del = await pify(connection.query,connection)(sql);
        ctx.body = "success"
    
})
}

