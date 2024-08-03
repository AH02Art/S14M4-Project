const router = require('express').Router();

router.use("*", function(request, response) {
    response.json({ project: "S14M4-Project" });
})

router.use((error, request, response, next) => { // eslint-disable-line
    response.status(500).json({
        customMessage: "something went wrong inside the recipes router",
        message: error.message,
        stack: error.stack
  });
});

module.exports = router;