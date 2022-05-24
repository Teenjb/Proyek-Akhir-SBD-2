import './index.js';
import { ListItem,List,ListItemText,Button} from '@mui/material';
import { styled } from '@mui/material';
import { useState,useEffect } from 'react';
import {ReactSession} from 'react-client-session';
const axios = require('axios');

const useStyles = styled({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const handleSubmit = () => {
  window.location.href = '/UserVehicle';
}

const handleClickListItem = value => event => {
  console.log(value);
  ReactSession.set("vinClicked", value.vin);
  ReactSession.set("nameClicked", value.name);
  window.location.href = '/ServiceRecord';
}

function Home(){
  const [vehicle, setVehicle] = useState(null);
  useEffect(() => {
    const username = ReactSession.get("username");
    axios.get(`http://localhost:3112/vesmas/uservehicle`, {params:{
          username: username
        }}).then(function(response) {
          setVehicle(response.data);
          })
  }, []);

  if(!vehicle) {
    return(
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
        <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
      </div>
    )
  }

  return(
  <section className="h-full gradient-form bg-slate-200 md:h-screen">
    <div className="container mx-auto py-12 px-6 h-full">
      <div className="flex justify-center flex-col items-center flex-nowrap h-full g-6">
      <h4 className="text-3xl text-sky-900 font-bold mt-1 mb-12 pb-1 ">Welcome to VESMAS</h4>
        <div className="flex justify-center items-center flex-wrap h-full w-full g-6">
          <div className="xl:w-1/2 px-12 h-full">
            <div className="lg:flex lg:flex-wrap g-0">
              <div className="lg:w-full px-4 md:px-0">
                <div className="md:p-12 md:mx-6">
                  <div className="text-center">
                    <h4 className="text-3xl text-sky-900 font-bold mt-1 mb-12 pb-1 ">How to Use Vesmas</h4>
                    <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aliquam ipsa reiciendis magni molestiae nemo dicta possimus unde ratione, error cum voluptates eaque. Deleniti, dolores? Adipisci dolorem libero ex modi facere. Eligendi aliquam nihil voluptatum maxime voluptas repellat? Nisi ipsa ea animi dolores sed maxime repudiandae at nihil iure dolore?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 px-12 h-full">
            <div className="lg:flex lg:flex-wrap g-0">
              <div className="lg:w-full h-3/4 md:px-0" >
                <List>
                  {vehicle.map(value => {
                    return (
                      <ListItem className="text-white bg-sky-900 my-5 w-full rounded-lg" 
                      key = {value.vin} 
                      onClick={handleClickListItem(value)}
                      button
                      >
                        <ListItemText primary={`${value.name}`} />
                        <ListItemText className='text-right' primary={`${value.type}`} />
                      </ListItem>
                    );
                  })}
                </List>
              </div>
              <Button className="bg-sky-900 rounded-lg" onClick={()=>{handleSubmit()}}>
                <span className="text-white">Add Vehicle</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Home;