const pify = require('promise.ify');

module.exports = function(router, body, connection) {
    
    router.post('/api/update',body,async (ctx) => {
    const sql = `update people set phone = "${ctx.request.body.phone}",
    home = "${ctx.request.body.home}", grade = "${ctx.request.body.grade}",
    class = "${ctx.request.body.class}", 
    lang = "${ctx.request.body.lang}", job = "${ctx.request.body.job}", 
    github = "${ctx.request.body.github}"
    where name = "${ctx.request.body.name}" `

    // const update = await pify(connection.query,connection)(sql);
    // console.log(update)

    console.log(sql);
    connection.query(sql, (err,result) => {
        console.log(err);
        console.log(result);
    })
    ctx.body = '666'
})
}
