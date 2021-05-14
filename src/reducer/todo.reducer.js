export const initialState = [
    {
        todo: 'initial todo',
    }
]

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { todo: action.payload }
            ]
        default:
            return state
    }
}