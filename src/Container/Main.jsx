import  React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState }from 'react'
import Login from '../component/Login';
import Sign from '../component/Sign';
import { Paper } from '@mui/material';

const paperStyle = {width:310,height:'75vh',
margin:"20px auto",
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}

    </div>
   
  );
}



TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
  

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <>
 {/* <div className='container' style={{backgroundImage:"url(" + "assets/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg"+ ")" , backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}> */}
 <Paper  style = {paperStyle}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="login" {...a11yProps(0)}  sx={{ml:'60px'}}/>
          <Tab label="sign up" {...a11yProps(0)} />
          </Tabs>
    
      <TabPanel value={value} index={0} >
       <Login/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Sign/>
      </TabPanel>
      {/* <Typography variant='h2' marginTop='60px' marginLeft='20px'>Welcome to the site</Typography> */}
      </Paper>
 {/* </div> */}
     
      </>
   
  );
}

