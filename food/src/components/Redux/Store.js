import { configureStore } from '@reduxjs/toolkit'
import slice from './Slices'
const Store = configureStore({
    reducer:{
        Categoryid:slice
    }
})
export default Store;