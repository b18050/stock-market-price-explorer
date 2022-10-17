import { configureStore } from '@reduxjs/toolkit'
import chartTypeReducer from './reducers/chartTypeReducer'
import roleReducer from './reducers/roleReducer'
import stockReducer from './reducers/stockReducer'

const store = configureStore({
  reducer: {
    chartType: chartTypeReducer,
    role: roleReducer,
    stock: stockReducer
  }
})

export default store