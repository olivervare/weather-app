import {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import WeatherTab from "./WeatherTab.jsx";
import axios from "axios";

export default function WeatherApp() {
  const [location, setLocation] = useState('');
  const [response, setResponse] = useState({});

  const url = `https://api.weatherapi.com/v1/forecast.json?key=abf970cd17794273ad512329232710&q=${location}&days=3&aqi=no&alerts=no`;

  function handleInput(event) {
    setLocation(event.target.value);
  }

  const searchWeather = () => {
    axios.get(url)
      .then(res => {
        setResponse(res.data);
        console.log(res.data);
      })
    setLocation('');
  }

  return (
    <>
      <h1>THE WEATHER APP</h1>
      <div>
        <div className="input-area">
          <Box
            component="form"
            sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-controlled"
              label="Enter location here.."
              value={location}
              onChange={handleInput}
            />
          </Box>
          <Button variant="contained" onClick={() => searchWeather(location)}>Fetch weather data</Button>
        </div>
        <div>
          {response.location ? <h1>{response.location.name}</h1> : null}
        </div>
        {response ? <WeatherTab response={response}/> : null}
      </div>
    </>
  )
}