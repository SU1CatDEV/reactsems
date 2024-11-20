import { EXAMPLE_ACTION, CHANGE_NAME } from "./actions"

const initialState = {
    showName: false,
    name: 'Default'
}
export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
    case EXAMPLE_ACTION:
    return {
    ...state,
    showName: !state.showName
    }
    case CHANGE_NAME:
    return {
    ...state,
    name: action.payload
    }
    default:
    return state
    }
}
    