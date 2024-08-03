const router = require('express').Router();
const Recipe = require("./recipes-model.js");

router.get("/:recipe_id", function(request, response, next) {
    Recipe.getRecipeById(request.params.recipe_id)
        .then((data) => {
            response.status(200).json(data);
        })
        .catch(next);
});

router.use(function(error, request, response, next) { // eslint-disable-line
    response.status(500).json({
        customMessage: "something went wrong inside the recipes router",
        message: error.message,
        stack: error.stack
  });
});

module.exports = router;