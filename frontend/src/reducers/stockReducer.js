import { createSlice } from '@reduxjs/toolkit'
import stockService from '../services/stocks'

const stockSlice = createSlice({
    name: 'stocksData',
    initialState: {
        stocksData: [],
        names: [],
        stockName: ''
    },
    reducers: {
        setStocks(state, action) {
            return {
                ...state,
                stocksData: action.payload
            }
        },
        setStockName(state, action) {
            return {
                ...state,
                stockName: action.payload
            }
        },
        setStockNames(state, action) {
            return {
                ...state,
                names: action.payload
            }
        }
    }
})

export const getRequiredStocks = (stockName, startDate, endDate) => {
    return async dispatch => {
        const stocks = await stockService.getRequiredStocks(stockName, startDate, endDate);
        dispatch(setStocks(stocks))
    }
}

export const initializeStockNames = () => {
    return async dispatch => {
        const data = await stockService.getStockNames();
        dispatch(setStockNames(data))
    }
}


export const { setStocks, setStockName, setStockNames } = stockSlice.actions;
export default stockSlice.reducer;

