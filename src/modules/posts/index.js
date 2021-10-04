const router  = require('express').Router()


router.get('/', async (req, res) => {
    const {cat} =  req.query

    if(cat){
        const posts = await req.rows('select * from posts where category_id = $1', cat)
        res.json(posts)
    }
    else{
        const posts = await req.rows('select * from posts')
        res.json(posts)
    }

})


module.exports = router