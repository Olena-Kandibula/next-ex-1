
export default function echo(req, res) {// типа контроллер, работаем на сервере 
    res.statusCode = 200
    res.setHeader('Contant-type', 'application/json')
    res.end(JSON.stringify({
        message:req.query.message ?? 'Base message'
    }))
}