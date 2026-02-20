import NavBar from './components/NavBar'
import WeatherPanel from './components/WeatherPanel'
import './App.css';

export default function App(){
    return(
     <div className='App'>
        <NavBar/>
        <WeatherPanel/>
     </div>
    )
}