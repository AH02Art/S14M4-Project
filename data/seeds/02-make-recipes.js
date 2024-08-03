const recipes = [
    { recipe_name: 'Deer Stew' },
    { recipe_name: 'Sausages' },
    { recipe_name: 'Eyescream' }
];

const ingredients = [
    { ingredient_name: 'Deer', ingredient_unit: 'lbs' },
    { ingredient_name: 'Blueberries', ingredient_unit: 'lbs' },
    { ingredient_name: 'Entrails', ingredient_unit: 'lbs' },
    { ingredient_name: 'Thistle', ingredient_unit: 'grams' },
    { ingredient_name: 'Greydwarf Eye', ingredient_unit: 'eyes' },
    { ingredient_name: 'Frost Gland', ingredient_unit: 'lbs' }
];

const steps = [
    // Deer Stew
    { step_instructions: 'Hunt and kill deer', step_number: 1, recipe_id: 1 },
    { step_instructions: 'Add blueberries', step_number: 2, recipe_id: 1 },
    // Sausages
    { step_instructions: 'Stuff meat into entrails', step_number: 1, recipe_id: 2 },
    { step_instructions: 'Add thistle for flavoring', step_number: 2, recipe_id: 2 },
    // Eyescream
    { step_instructions: 'Ask the Greydwarves for their eyes', step_number: 1, recipe_id: 3 },
    { step_instructions: 'Freeze with frost glands', step_number: 2, recipe_id: 3 }
];

const step_ingredients = [
    // Deer Stew
    { step_id: 1, ingredient_id: 1, quantity: 1 },
    { step_id: 2, ingredient_id: 2, quantity: 0.25 },
    // Sausages
    { step_id: 3, ingredient_id: 3, quantity: 4 },
    { step_id: 4, ingredient_id: 4, quantity: 1 },
    // Eyescream
    { step_id: 5, ingredient_id: 5, quantity: 3 },
    { step_id: 6, ingredient_id: 6, quantity: 1 }   
];

exports.seed = async function(knex) {
    await knex('recipes').insert(recipes);
    await knex('ingredients').insert(ingredients);
    await knex('steps').insert(steps);
    await knex('step_ingredients').insert(step_ingredients);
}