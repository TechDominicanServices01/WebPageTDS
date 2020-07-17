const express= require('express');
const router = express.Router();


router.get('/', (req,res) =>{
    res.send('<center><h1>Welcome to TDS</h1><center>');
});



module.exports = router;
