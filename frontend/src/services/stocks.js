import axios from "axios";

const baseUrl = 'http://localhost:8080/api/stocks';

const getStockNames = async () => {
    const url = `${baseUrl}/names`;
    const response = await axios.get(url);
    console.log(response.data)
    return response.data;
}

const getStocksSummary = async () => {
    const url = `${baseUrl}/summary`
    const response = await axios.get(url);
    return response.data;
}

const getRequiredStocks = async (stockName, startDate, endDate) => {
    const url = `${baseUrl}/between`
    const response = await axios.post(url, {stockName, startDate, endDate});
    return response.data;
} 

const uploadCSV = async (csvData) => {
    const url = `${baseUrl}/upload`
    const response = await axios.post(url, csvData)
    return response.data;
}

export default { getStockNames, getRequiredStocks, uploadCSV, getStocksSummary };
