const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();

// Set the view engine to Handlebars
app.set('view engine', 'hbs');

// Set the path to the views directory
app.set('views', path.join(__dirname, 'views'));

// Define a route
app.get('/', (req, res) => {
  res.render('index',{
    title:'weather-app',
    name:'John'
  }); // This will render the 'index.hbs' file located in the 'views' folder
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Andrew '
    })
})

// goal: create a template for help page

// 1. Setup a help template to render a help message to the screen
// 2.Setup the help route and render the template with an example message
// 3.Visit the route and see your help message print


app.get('/help',(req,res)=>{
    res.render('help',{
        title:'This is some helpful text'
    })
})
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
