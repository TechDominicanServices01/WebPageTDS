const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')

//initialization
const app = express();

//settings
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));//decir donde esta la caperta views
app.engine('.hbs',exphbs({
    defaultlayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine', '.hbs');

//Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//Routes
app.use(require('./routes'));

//Public
app.use(express.static(path.join(__dirname,'public')));

//Start Server
app.listen(app.get('port'),()=>{
    console.log(`Server running on port ${app.get('port')}`)
});