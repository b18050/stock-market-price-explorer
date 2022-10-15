import React, { useState, useEffect } from 'react'
import { Line , Bar} from 'react-chartjs-2';
import "./../App.css";
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

const ShowStock = ({stocks, stockName, chartType}) => {

    const [data, setData] = useState({})
    const [haveData, setHaveData] = useState(false);
    const [barType, setBarType] = useState(true);

    const getDate = (stock) => {
        return stock.TIMESTAMP.substring(0, stock.TIMESTAMP.indexOf('T'));
    }

    const getPrice = (stock) => {
        return stock.CLOSE;
    }
    useEffect(() => {
        const chartLables = stocks.map(getDate);
        const chartData = stocks.map(getPrice);
        const data = {};
        data.labels = chartLables;
        data.datasets = [
            {   
                "id": 'bar',
                "label":stockName, 
                "data": chartData,
                "borderColor": 'rgb(25, 44 100)',
                "backgroundColor": 'rgba(255, 99, 12, 0.5)'
                
            }
        ];
        setData(data);
        setHaveData(true);
        setBarType(chartType == 'bar')
    }, [stocks, stockName, chartType])

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