const pify = require('promise.ify');

module.exports = function(router, body, connection) {
    
    router.post('/api/add',body,async (ctx) => {
        console.log('测试功能')
        console.log(ctx.request.body);
    const sql = `insert into people (name,phone,home,grade,lang,job,class,github) 
    values ( "${ctx.request.body.name}","${ctx.request.body.phone}",
    "${ctx.request.body.home}","${ctx.request.body.grade}","${ctx.request.body.lang}"
,"${ctx.request.body.job}","${ctx.request.body.class}","${ctx.request.body.github}" )`
    const insert = await pify(connection.query,connection)(sql)
    ctx.body = {
        state:200,
        message:'添加成功'
    }
})
}

