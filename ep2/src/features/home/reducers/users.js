export const initialState = [{
    fname: '',
    lname: ''
}]


function users(state, action) {
    switch (action.type) {
        case 'create':
            state = [...state, action.payload]
            return state
        case 'remonve':
            state.splice(action.index, 1)
            return state
        default:
            break;
    }
}

export default users
