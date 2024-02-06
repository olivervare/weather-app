import './App.css'
import WeatherApp from "./WeatherApp.jsx";

function App() {

  return (
    <section className='App'>
      <header className='App-header'>
        Exercises in React
      </header>
      <div className='main'>
        <WeatherApp />
      </div>
      Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
    </section>
  )
}

export default App
