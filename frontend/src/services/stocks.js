import axios from "axios";

const baseUrl = 'http://localhost:8080/api/stocks';

const getStockNames = async () => {
    const url = `${baseUrl}/names`;
    const response = await axios.get(url);
    console.log(response.data)
    return response.data;
}

const getRequiredStocks = async (stockName, startDate, endDate) => {
    const url = `${baseUrl}/between`
    const response = await axios.post(url, {stockName, startDate, endDate});
    return response.data;
} 

export default { getStockNames, getRequiredStocks };
