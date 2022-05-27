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

  // if(!vehicle) {
  //   return(
  //     <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
  //       <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
  //       <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
  //       <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
  //     </div>
  //   )
  // }

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
              <div className="flex justify-center items-start lg:w-full h-96 md:px-0 overflow-scroll scrollbar-hide px-2 border-4 border-orange-500 rounded-lg" >
                {vehicle &&(
                <List>
                  {vehicle.map(value => {
                    return (
                      <ListItem className="text-white bg-sky-900 my-5 w-full rounded-lg" 
                      key = {value.vin} 
                      onClick={handleClickListItem(value)}
                      button
                      >
                        <ListItemText primary={`${value.name}`} className="w-96"/>
                        <ListItemText className="w-48 text-right" primary={`${value.type}`} />
                      </ListItem>
                    );
                  })}
                </List>
                )}
                {!vehicle &&(
                  <div className="w-full h-full flex justify-center items-center">
                  <svg role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-orange-500 fill-gray-600 dark:fill-sky-900 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                  </div>
                )}
              </div>
              <Button className="bg-sky-900 rounded-lg mt-5 hover:bg-orange-500" onClick={()=>{handleSubmit()}}>
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