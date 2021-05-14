import { initialState, reducer } from '../todo.reducer'

describe('reducer', () => {
    test('default should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    test('should handle ADD_TODO case', () => {
        expect(reducer(initialState, {
            type: 'ADD_TODO',
            payload: 'test todo'
        })).toEqual([
            { todo: 'initial todo' },
            { todo: 'test todo' }
        ])
    })
})