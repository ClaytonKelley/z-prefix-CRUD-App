/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('inventory', (table) => {
    table.increments('id').primary();
    table.string('ItemName', 100);
    table.string('Description', 100);
    table.integer('Quantity')
    table.integer('userID')
    table.foreign('userID');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('inventory')

};
