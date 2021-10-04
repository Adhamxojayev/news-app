const router  = require('express').Router()


router.get('/', async (req, res) => {
    const category = await req.rows('select * from categories')
    res.json(category)

})


module.exports = router