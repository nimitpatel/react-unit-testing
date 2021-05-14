import { addTodo } from '../todo.action'

describe('todo actions', () => {
    test('should create an action to add todo', () => {
        const todo = "test todo"

        const expectedAction = {
            type: 'ADD_TODO',
            payload: todo
        }

        expect(addTodo(todo)).toEqual(expectedAction)
    })
})