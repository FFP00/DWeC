import './assets/css/App.css';

import Header from './components/Header.jsx';
import WeatherPanel from './components/WeatherPanel.jsx';
export default function App(){
const appid = "000129725b683e58d194bb09dc763dd9";

  return(
    <div className="App">
      <Header/>
      <WeatherPanel appid={appid}/>
    </div>
  )
}