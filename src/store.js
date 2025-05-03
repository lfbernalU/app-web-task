import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './store/todoSlice'
import goalReducer from './store/goalsSlice'
// import logger from './middleware/logger'
// import checker from './middleware/checker'

export default configureStore({
    reducer:{
        todos:todoReducer,
        goals:goalReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,checker)
})