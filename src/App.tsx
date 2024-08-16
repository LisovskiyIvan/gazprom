import { useEffect, useState } from "react";
import { Pagination } from "./components/Pagination"
import { DataDTO, Table } from "./components/Table"
import Papa, { ParseResult } from "papaparse";


function App() {
  const [slicedData, setSlicedData] = useState<DataDTO[]>([]);
  const [data, setData] = useState<DataDTO[]>([]);
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(20)

  useEffect(() => {
    function getData() {
      fetch("/data.csv")
        .then((response) => response.text())
        .then((csvText) => {
          Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (result: ParseResult<any>) => {
              setData(result.data as DataDTO[]);
              setSlicedData(result.data.slice(0, 10) as DataDTO[])
            },
          });
        })
        .catch((error) => console.error("Error loading the CSV file:", error));
    }
    getData();
  
  }, []);
  

  function goNext() {
    
    setSlicedData(data.slice(from + 10, to + 10))
    setFrom(prev => prev + 10)
    setTo(prev => prev + 10)
  }

  function goBack() {
    if (from === 0  ) return 
    setSlicedData(data.slice(from - 10, to - 10))
    setFrom(prev => prev - 10)
    setTo(prev => prev - 10)
  }

  return (
    <div className="text-lg flex flex-col items-center justify-center">
      <Table data={slicedData}></Table>
      <Pagination goNext={goNext} goBack={goBack}></Pagination>
    </div>
  )
}

export default App
