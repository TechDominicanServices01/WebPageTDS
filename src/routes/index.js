const express= require('express');
const router = express.Router();


router.get('/', (req,res) =>{
    res.render('pages/home')
});

router.get('/alexandra',function(req,res){
    res.render('pages/about')
})


module.exports = router;
