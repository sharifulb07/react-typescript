import React from 'react'

type DataFetchProps={
    status:'success' |'loading'| 'error';
}


function DataFetch({status}:DataFetchProps) {
    if(status==="loading"){
        return   <h1>Data is loading ....</h1>
    }
    else if(status==="error"){
        return    <h1>Error: Data could not load..</h1>
    }
  return (
    <div>
      
    
  
      <h1>DataFetch has loaded successfully </h1>
    </div>
  )
}

export default DataFetch
