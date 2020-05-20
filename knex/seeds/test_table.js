
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('test_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('test_table').insert([
        {name: 'Ahmad'},
        {name: 'John'},
        {name: 'Tim'},
        {name: 'Robert'}
      ]);
    });
};
