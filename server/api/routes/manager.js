import Express from 'express'
const router = Express.Router();


router.get('/tic', (req, res) => {
    res.send("tac")
})

module.exports = router