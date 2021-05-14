import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { getTodos } from '../asynctodo.action'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    test('creates SET_TODOS when fetching is done', () => {
        fetchMock.getOnce('/todos', {
            body: { todos: ['test todo'] },
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            { type: 'SET_TODOS', payload: { todos: ['test todo'] } }
        ]

        const store = mockStore({ todos: [] })

        return store.dispatch(getTodos())
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActions)
                    })
    })

    test('log error on fetch req fails', () => {
        fetchMock.getOnce('/todos', {throws: 'error'})

        const expectedActions = [{
            type: 'FAILED_TO_GET_TODO'
        }]

        const store = mockStore({ todos: [] })

        return store.dispatch(getTodos())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})