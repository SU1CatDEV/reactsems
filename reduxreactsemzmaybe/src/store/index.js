import {configureStore} from '@reduxjs/toolkit'
import {profileReducer} from './profile/reducer'
import { themeReducer } from './theme/reducer'

export const store = configureStore(
    {
        reducer: {
            profile: profileReducer,
            theme: themeReducer
        },
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)