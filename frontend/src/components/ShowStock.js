import React, { useState, useEffect } from 'react'
import { Line , Bar} from 'react-chartjs-2';
import "./../App.css";
import {  useSelector }  from 'react-redux';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, 
    BarElement
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stock Price Chart',
      },
    },
    scales: {
      y: {
        title: {display: true, text: "Stock Closing Price ( in ₹ )"}
      },
      x: {
        title: {display: true, text: "Dates (in YYYY-MM-DD)"}
    },
  }
  };

const ShowStock = () => {
  const stockName = useSelector(state => state.stock.stockName);
  const stocks = useSelector(state => state.stock.stocksData);
  const chartType = useSelector(state => state.chartType);

  const [data, setData] = useState({})
  const [haveData, setHaveData] = useState(false);
  const [barType, setBarType] = useState(true);

  const getDate = (stock) => {
      return stock.TIMESTAMP.substring(0, stock.TIMESTAMP.indexOf('T'));
  }

  useEffect(() => {
    setBarType(chartType == 'BAR')
  }, [chartType])
  
  useEffect(() => {
      const data = {
        labels: stocks.map(getDate),
        datasets: [
          {   
              "id": 'bar',
              "label":stockName, 
              "data": stocks.map(stock => stock.CLOSE),
              "borderColor": 'rgb(25, 44 100)',
              "backgroundColor": 'rgba(255, 99, 12, 0.5)'
          }
      ]
    };
    setData(data);
    setHaveData(true);
      
  }, [stocks, stockName])

  const ShowChart = () => {

    if(!haveData) return null;
    return <>
      {!barType && <Line 
                  data={data}
                  options={options}
                  width={50}
                  height={20}  
                  />}
      {barType && <Bar 
          data={data}
          options={options}
          width={50}
          height={20}  
      />
      }
    </>
  }
 
    return (
        
        <div className="chartTable">
           <ShowChart />
        </div>
    )
}
 
export default ShowStock;