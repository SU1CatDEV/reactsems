import {configureStore} from '@reduxjs/toolkit'
import {profileReducer} from './profile/reducer'
import { themeReducer } from './theme/reducer'
import { productsReducer } from './products/reducer'

export const store = configureStore(
    {
        reducer: {
            profile: profileReducer,
            theme: themeReducer,
            products: productsReducer
        },
    }
)