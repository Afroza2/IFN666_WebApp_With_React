import React, { useState, useEffect } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import axios from "axios";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
console.log(process.env.REACT_APP_API_KEY_FMP)

const stock_api_key = process.env.REACT_APP_API_KEY_FMP

//https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=b36cde29d2d36444523763a08e9d8869


function Stock() {
    const [stockData, setStockData] = useState([])
    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${stock_api_key}`)
            .then((response) => {
                setStockData(response.data)
            })
    }, [])

  return (
   <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
       <AgGridReact  rowData={stockData}>
           <AgGridColumn field="symbol" headerName="Symbol" cellClass="vertical-middle" />
          <AgGridColumn field="name" headerName="Name" cellClass="vertical-middle" />
          <AgGridColumn field="sector" headerName="Industry"  cellClass="vertical-middle" />
       </AgGridReact>
    </div>
  );
}

export default Stock;
