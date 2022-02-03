export default function getById(req, res) {
    // res.statusCode = 200
    // res.setHeader('Contant-type', 'application/json')
    // res.end(req.query.id)
    res.json({yourId: req.query.id})
}