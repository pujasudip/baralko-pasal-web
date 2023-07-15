import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterSlice
    },
})