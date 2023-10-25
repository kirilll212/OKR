const todoController = require('../controllers/todoController')

module.exports = (router) => {
    router.get('/list', todoController.getToDoList)
    router.post('/add', todoController.addTodo)
    router.delete('/delete/:id', todoController.deleteTodo)
    router.put('/update/:id', todoController.updateTodo)

    return router
}