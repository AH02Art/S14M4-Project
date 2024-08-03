
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', function(table) {
            table.increments('recipe_id');
            table.string('recipe_name', 128).notNullable().unique();
        })
        .createTable('ingredients', function(table) {
            table.increments('ingredient_id');
            table.string('ingredient_name', 128).notNullable().unique();
            table.string('ingredient_unit', 64);
        })
        .createTable('steps', function(table) {
            table.increments('step_id');
            table.string('step_instructions')
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
