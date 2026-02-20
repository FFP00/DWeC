
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import TableCoins from "./components/TableCoins";

export default function App(){
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function getData(){
    try {
      const res = await axios.get("/data/coins.json");
      //"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

      setCoins(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect (() => {
    getData();
  },[]);

  return(
    loading?<Loading/>:
      <div className="container">
        <div className="row">
        	<input 
            type="text"
            placeholder="Search a Coin"
            className="form-control bg-dark text-light border-0 mt-4 text-center"
            autoFocus
            onChange = {(e) => setSearch(e.target.value)}
           />
          <TableCoins coins={coins} search={search}/>
        </div>
      </div>
  )
}
