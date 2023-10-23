const todoController = require('../controllers/todoController')

module.exports = (router) => {
    router.get('/list', todoController.getToDoList)

    return router
}