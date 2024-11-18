import { TOGGLE_THEME } from "./actions"

const initialState = {
    theme: true
}
export const themeReducer = (state = initialState, action) => {

    switch (action.type) {
    case TOGGLE_THEME:
    return {
    ...state,
    theme: !state.theme
    }
    default:
    return state
    }
}
    