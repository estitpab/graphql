
exports.up = function(knex) {
    return knex.schema.createTable('image', table => {
        table.increments();
        table.string('path');
        table.integer('productId').unsigned();
        table.foreign('productId').references('product.id');
    });
};

exports.down = function(knex) {
  
};
