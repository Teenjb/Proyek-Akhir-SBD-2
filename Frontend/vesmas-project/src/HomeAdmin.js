import './index.js';
import { ListItem,List,ListItemText,Button,Avatar} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/material';
import { useState,useEffect } from 'react';
import {ReactSession} from 'react-client-session';
const axios = require('axios');

function HomeAdmin(){
  const [sparePart, setSparePart] = useState(null);
  const [vin, setVin] = useState(null);
  const [data, setData] = useState(null);
  const [vinValid, setVinValid] = useState(false);
  const [username, setUsername] = useState(null);
  const [inisial, setInisial] = useState(null);

  const handleInputChange = (event) => {
    const {id, value} = event.target;
    axios.get(`https://vesmas.azurewebsites.net/vesmas/homeadmin`,{params:{
        vin: value
        }}).then(function(response) {
          if(response.data.length > 0){
            setData(response.data[0]);  
          }else{
            setData(null);
          }
        });
    if(value===""){
      setVinValid(false);
    }else{
      setVinValid(true);
    }
    setVin(value);
  }

  const handleLogout = () => {
    ReactSession.set("usernameAdmin",null);
    window.location.href = '/';
  }

  
  const handleSubmit = async (event) => {
    const {id} = event.target;
    if(id === 'addsparepart'){
      window.location.href = '/AddSparePart';
    }
    if(id === 'checkvin'){
      console.log(data);
      if(data === null){
        ReactSession.set("vehicleAdmin",{});
        ReactSession.set("vins",vin);
        ReactSession.set("vehiclefound",false);
      }else{
        ReactSession.set("vehicleAdmin",data);
        ReactSession.set("vehiclefound",true);
      }
      window.location.href = '/AdminServiceRecord';
    }
  }
  
  const handleClickListItem = value => event => {
    //console.log(value);
    ReactSession.set("sparePartClicked", value);
    window.location.href = '/EditSparePart';
  }

  useEffect(() => {
  setUsername(ReactSession.get("usernameAdmin"));
  setInisial(ReactSession.get("usernameAdmin").charAt(0));
    axios.get(`https://vesmas.azurewebsites.net/vesmas/sparepart`).then(function(response) {
          setSparePart(response.data);
          })
  }, []);

  return(
  <section className="h-full gradient-form bg-slate-200 md:h-screen">
    <div className="container mx-auto py-12 px-6 h-full">
      <div className="flex justify-center flex-col items-center flex-nowrap h-full g-6">
      <div className='absolute top-0 left-0 m-5'>
        <Button className="flex justify-start flex-wrap text-left bg-sky-900 text-white rounded-lg">
          <Avatar className='ml-2 my-1'>{inisial}</Avatar>
          <p className='mx-3 text-lg'>Hi! {username}</p>
        </Button>
        <Button className='bg-orange-500 mt-2' onClick={()=>{handleLogout()}}>
          <LogoutIcon className='text-sky-900'/>
        </Button>
      </div>
      <h4 className="text-3xl text-sky-900 font-bold mt-1 mb-12 pb-1 ">Welcome to ADMIN VESMAS</h4>
        <div className="flex justify-center items-center flex-wrap h-full w-full g-6">
        <div className="xl:w-1/2 px-12 h-full">
            <div className="lg:flex lg:flex-col items-center lg:flex-wrap g-0">
                <h2 className='text-sky-900 text-2xl font-bold mb-5'>
                    Spare Part List
                </h2>
              <div className="flex items-start flex-row justify-center w-96 rounded-lg h-96 overflow-scroll scrollbar-hide bg-sky-900 shadow-lg" >
                {sparePart &&(
                <List>
                  {sparePart.map(value => {
                    return (
                      <ListItem className="text-white bg-orange-500 my-5 w-80 rounded-lg" 
                      key = {value.id} 
                      onClick={handleClickListItem(value)}
                      button
                      >
                        <ListItemText primary={`${value.name}`} />
                        <ListItemText className='text-right' primary={`${value.price}`} />
                      </ListItem>
                    );
                  })}
                </List>
                )}
                {!sparePart &&(
                  <div className="w-full h-full flex justify-center items-center">
                    <svg role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-sky-900 fill-gray-600 dark:fill-orange-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                  </div>
                )}
              </div>
              <button 
              id='addsparepart'
              className="inline-block my-8 px-6 py-2.5 bg-sky-900 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:bg-orange-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-48 mb-3" 
              onClick={(e)=>{handleSubmit(e)}}>
                <span className="text-white">Add Spare Part</span>
              </button>
            </div>
          </div>
          <div className="xl:w-1/2 px-12 h-full">
            <div className="lg:flex lg:flex-wrap g-0">
              <div className="lg:w-full px-4 md:px-0">
                <div className="md:p-12 md:mx-6">
                  
                  <input
                    type="text"
                    className={vinValid?"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-green-500 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg": "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-orange-500 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg"}
                    id="vin"
                    placeholder="Masukan VIN"
                    value={vin}
                    onChange={(e) => {handleInputChange(e)}}
                />
                <button
                    className="inline-block my-8 px-6 py-2.5 bg-sky-900 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:bg-orange-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-48 mb-3"
                    id='checkvin'
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={(e)=>{handleSubmit(e)}}
                >
                    Edit/Create Record
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default HomeAdmin;