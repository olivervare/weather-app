import {useState} from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function SlidingElement({response, tabValue}) {
  const [sliderValue, setSliderValue] = useState(0);

  let hourValue = sliderValue;
  let dayValue = tabValue;
  const handleChange = (event, newSliderValue) => {
    setSliderValue(newSliderValue);
  };

  return (
    <>
      <div className='icon-temp'>
        <img src={response.forecast.forecastday[dayValue].hour[hourValue].condition.icon} alt='a weather icon'/>
        <h2>{response.forecast.forecastday[dayValue].hour[hourValue].temp_c} °C</h2>
        <div className='side-stats'>
          <p>Feels like: {response.forecast.forecastday[dayValue].hour[hourValue].feelslike_c} °C</p>
          <p>Humidity: {response.forecast.forecastday[dayValue].hour[hourValue].humidity}%</p>
          <p>Chance of rain/snow:
            {response.forecast.forecastday[dayValue].hour[hourValue].chance_of_rain}% /
            {response.forecast.forecastday[dayValue].hour[hourValue].chance_of_snow}%</p>
          <p>Wind: {Math.round(((response.forecast.forecastday[dayValue].hour[hourValue].wind_kph) / 3.6) * 10) / 10} m/s</p>
        </div>
      </div>
      <p>{response.forecast.forecastday[dayValue].hour[hourValue].condition.text}</p>
      <Box sx={{width: 300}}>
        <Slider
          size="small"
          defaultValue={0}
          aria-label="Hours"
          value={sliderValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={23}
        />
      </Box>
    </>
  );
}
