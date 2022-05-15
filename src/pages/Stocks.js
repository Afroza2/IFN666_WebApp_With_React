import React, { useState, useEffect} from 'react';
import { AgGridReact} from 'ag-grid-react';
import axios from "axios";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

//https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=b36cde29d2d36444523763a08e9d8869

const url = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=b36cde29d2d36444523763a08e9d8869`

function Stock() {
    const [stockData, setStockData] = useState([])
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setStockData(response.data)
            })
    }, [])

    const columns = [
    { headerName: "Symbol", field: "symbol",filter: true },
    { headerName: "Name", field: "name" },
    { headerName: "Industry", field: "sector", filter: true },
  ];

  return (
   <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>

       <AgGridReact  rowData={stockData} columnDefs={columns}/>

    </div>
  );
}

export default Stock;