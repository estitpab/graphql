
exports.up = function(knex) {
  return knex.schema.createTable('theme', table => {
      table.increments();
      table.string('products');
      table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('theme');
};
