import './assets/css/App.css';
import NavBar from './components/NavBar';
import Form from './Form';
import WeatherPanel from './components/WeatherPanel';
function App() {
  return (
    <div className="App">
    <NavBar />
    <WeatherPanel />
    </div>
  );
}

export default App;
