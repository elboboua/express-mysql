const express = require('express');
const hbs = require('express-handlebars');
const knex = require('./knex/knex.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.set('view engine', 'hbs');
app.engine('hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname = "./views/pages"
}))


// app.get('/', (req, res) => {
//   res.render('test.hbs');
// }) 

app.get('/names', async (req, res) => {
  let context= {}
  let data = await knex.select().from('test_table');

  context.names = JSON.parse(JSON.stringify(data));
  
  console.log(context);
  res.render('names', context)
});

app.get('/addname/:name', async (req, res) => {
    await knex('test_table').insert({name: req.params.name})
    res.redirect('/names') 
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});