
exports.up = function(knex) {
    return knex.schema.createTable('stock', table => {
        table.increments();
        table.integer('quantity');
        table.integer('productId').unsigned();
        table.foreign('productId').references('product.id');
        table.timestamps();
    });
};

exports.down = function(knex) {
  
};
