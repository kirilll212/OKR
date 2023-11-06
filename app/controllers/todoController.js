const Todo = require('../models/todo')

class TodoController {
    async getToDoList(req, res) {
        try {
            const todos = await Todo.findAll()

            if (!todos) {
                res.status(404).json({ message: 'Not found' })
            }

            res.status(200).json({ message: 'All todos', todos })
        } catch (err) {
            res.status(500).json({ message: 'Server error' + err })
        }
    }

    async addTodo(req, res) {
        try {
            const { todo } = req.body

            if (typeof todo !== 'string') {
                res.status(400).json({ message: 'Invalid input data' })
            }

            await Todo.create({
                todo: todo
            })

            res.status(201).json({ message: `Todo '${todo}' added successfully` })
        } catch (err) {
            res.status(500).json({ message: 'Server error' + err })
        }
    }

    async updateTodo(req, res) {
        const id = req.params.id

        try {
            const todo = await Todo.findByPk(id)

            if (!todo) {
                res.status(404).json({ message: 'Not found' })
            }

            todo.completed = !todo.completed
            await todo.save()

            res.status(201).json({ message: `Status of todo - '${todo.todo}' (id - ${id}) updated successfully` })
        } catch (err) {
            res.status(500).json({ message: 'Server error' + err })
        }
    }

    async editTodo(req, res) {
        const id = req.params.id

        try {
            const { todo } = req.body

            if (typeof todo !== 'string') {
                res.status(400).json({ message: 'Invalid input data' })
            }

            const todoInstance = await Todo.findByPk(id)

            if (!todoInstance) {
                res.status(404).json({ message: 'Not found' })
            }

            await todoInstance.update({ todo })

            res.status(200).json({ message: `Todo with id - '${id}' updated successfully` })
        } catch (err) {
            res.status(500).json({ message: 'Server error' + err })
        }
    }

    async deleteTodo(req, res) {
        const id = req.params.id

        try {
            const todoInstance = await Todo.findByPk(id)

            if (!todoInstance) {
                res.status(404).json({ message: 'Not found' })
            }

            await todoInstance.destroy()

            res.status(200).json({ message: `Todo with id - '${id}' deleted successfully` })
        } catch (err) {
            res.status(500).json({ message: 'Server error' + err })
        }
    }
}

module.exports = new TodoController()