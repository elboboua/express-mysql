const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const app = express();

app.get('/names', async (req, res) => {
  let names = await knex.select().from('test_table');
  res.send(names);
});

app.get('/addname/:name', async (req, res) => {
    await knex('test_table').insert({name: req.params.name})
    res.redirect('/names') 
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});