import {configureStore} from '@reduxjs/toolkit'
import bannerSlice from './bannerSlice'

const store = configureStore({
    reducer: {
        // Add reducers here
        banner: bannerSlice,
    }
})

export default store