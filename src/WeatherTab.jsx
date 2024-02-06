import {useState} from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import SlidingElement from "./SlidingElement.jsx";

export default function WeatherTab({ response }) {
  const [tabValue, setTabValue] = useState(0);

  function handleValue(event, newTabValue) {
    setTabValue(newTabValue);
  }

  return (
    <section >
      <Box sx={{width: '100%', margin: '20px 0', backgroundColor: '#F8F8F8', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleValue} centered textColor='primary' indicatorColor="primary">
          <Tab label="Today" value='0'/>
          <Tab label="Tomorrow" value='1'/>
          <Tab label="The day after" value='2'/>
        </TabList>
        </Box>
        <TabPanel value='0'>
          <div className='slider'>
            <SlidingElement response={response} tabValue={tabValue} />
          </div>
        </TabPanel>
        <TabPanel value='1'>
          <div className='slider'>
            <SlidingElement response={response} tabValue={tabValue} />
          </div>
        </TabPanel>
        <TabPanel value='2'>
          <div className='slider'>
            <SlidingElement response={response} tabValue={tabValue} />
          </div>
        </TabPanel>
        </TabContext>
      </Box>
    </section>


  )
}