const pify = require('promise.ify');

module.exports = function(router, body, connection) {
    
    router.post('/api/find',body,async (ctx) => {
    const sql = `select name,grade,phone,home,class,github from people`
    const select = await pify(connection.query,connection)(sql);
    ctx.body = select[0];
    
})
}

