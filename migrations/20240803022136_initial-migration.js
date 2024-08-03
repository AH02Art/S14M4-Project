
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', function(table) {
            table.increments();
        })
        .createTable('ingredients', function(table) {
            table.increments();
        })
        .createTable('steps', function(table) {
            table.increments();
        })
        .createTable('step_ingredients', function(table) {
            table.increments();
        })
};


exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
