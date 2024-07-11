import express from 'express';
import path from 'path';

const app = express();

// Set the view engine to Handlebars
app.set('view engine', 'hbs');

// Set the path to the views directory
app.set('views', path.join(__dirname, 'views'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'weather-app',
    name: 'Harsha'
  });
});

// Define a route for the about page
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Harshavardhan'
  });
});

// Define a route for the help page
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'For help call police'
  });
});

// Start the server
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
