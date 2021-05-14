export const setTodos = data => ({
    type: 'SET_TODOS',
    payload: data
})

export const failedToGetTodos = _ => ({
    type: 'FAILED_TO_GET_TODO'
})

export const getTodos = _ => dispatch => (
    fetch('/todos')
        .then(res => res.json())
        .then(data => dispatch(setTodos(data)))
        .catch(_ => dispatch(failedToGetTodos()))
)