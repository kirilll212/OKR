const Todo = require('../models/todo')

class TodoController {
    async getToDoList(req, res) {
        try {
            const todos = await Todo.findAll()

            res.status(201).json({ message: 'All todos' + todos})
        } catch (err) {
            res.status(404).json({ message: 'Not found' })
        }

    }
}

module.exports = new TodoController()