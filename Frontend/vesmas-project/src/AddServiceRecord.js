import './index.css';
import React, {useState,setState, useEffect} from 'react';
import {ReactSession} from 'react-client-session';
import { Select, MenuItem, Backdrop, CircularProgress } from '@mui/material';
const axios = require('axios');


function AddServiceRecord() {
    const [formValues, setFormValues] = useState([{id:"", name: "", price : ""}])
    const [sparePart, setSparePart] = useState(null);
    const [vin, setVin] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      setVin(ReactSession.get("vinServiced"));
      console.log(vin);
      axios.get(`http://localhost:3112/vesmas/sparepart`).then(function(response) {
            console.log(response);
            setSparePart(response.data);
            })
    }, []);

    if(!sparePart) {
        return(
          <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
            <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
          </div>
        )
      }

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i].id= e.target.value.id;
        newFormValues[i].name = e.target.value.name;
        newFormValues[i].price = e.target.value.price;
        setFormValues(newFormValues);
        console.log(formValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, {id:"", name: "", price: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = () => {
        setOpen(true);
        let users = [];
        let promises = [];
        console.log(vin);
        let promise = new Promise((resolve, reject) => {
            axios.post(`http://localhost:3112/vesmas/servicerecord`, {
            vin:vin
            }).then(function(response) {
                if(response.data.id != null) {
                    console.log(response.data.id);
                }else{
                    alert('Something went wrong');
                } 
                resolve(response.data.id);
            });
        });
        promise.then(function(value){
            console.log(value + " idloaded");
            for(let i = 0; i < formValues.length; i++) {
                console.log('loading upload');
                promises.push(axios.post(`http://localhost:3112/vesmas/sparepartandservicerecord`, {
                    id_sparepart: formValues[i].id,
                    id_servicerecord: value
                }).then(function(response) {
                    users.push(response.data);
                }));
            }
            Promise.all(promises).then(() => {console.log(users);setOpen(false);window.location.href='/HomeAdmin';});
        });
    }

    return (
     <section className="h-full gradient-form bg-slate-200 md:h-screen">
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        >
            <CircularProgress className='text-orange-500' />
        </Backdrop>
        <div className="container mx-auto py-12 px-6 h-full">
            <div className="flex justify-center items-center flex-col h-full g-6 text-gray-800">
                <div className="text-center">
                  <h4 className="text-5xl text-sky-900 font-bold mt-1 mb-12 pb-1 ">Service Record VESMAS</h4>
                </div>
                <div className="flex justify-center items-center h-1/2 w-9/12 bg-sky-900 rounded-lg overflow-scroll scrollbar-hide">
                    <form className="flex flex-col justify-start items-center w-full h-full py-3" onSubmit={handleSubmit}>
                        {formValues.map((element, index) => (
                            <div className="flex items-end w-full pl-8" key={index}>
                                <div className="flex flex-col w-5/12 mx-2">
                                    <h2 className="text-white font-bold">Spare Part</h2>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="name"
                                        label="Sparepart"
                                        className="w-full bg-white h-12 border-solid border-4 border-orange-500 rounded-lg my-3"
                                        onChange={(e) => handleChange(index, e)}
                                    >
                                        {sparePart?.map(sparePart => {
                                            return (
                                                <MenuItem key={sparePart.id} value={sparePart}>{sparePart.name||''}</MenuItem>
                                            );
                                        })}
                                        
                                    </Select>
                                </div>
                                <div className="flex align-bottom flex-col w-5/12 mx-2">
                                    <label className="text-white font-bold">Price</label>
                                    <input type="text" className="form-control block w-full h-12 px-3 py-1.5 my-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border-solid border-4 border-orange-500 rounded-xl transition ease-in-out focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg" readOnly name="price" value={element.price || ""} onChange={e => handleChange(index, e)} />
                                </div>
                            {
                                index ? 
                                <button type="button"  className="inline-block mx-2 bg-orange-500 text-white font-medium text-center text-xs leading-tight uppercase rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/12 mb-3 h-1/2"onClick={() => removeFormFields(index)}>Remove</button> 
                                : null
                            }
                            </div>
                        ))}
                    </form>
                </div> 
                <div className="flex justify-center items-center bg-orange-500 w-9/12 rounded-lg mt-4 h-16">
                            <button className="inline-block px-6 py-2.5 mx-2 bg-sky-900 hover:border-2 hover:border-slate-200 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-24" type="button" onClick={() => addFormFields()}>Add</button>
                            <button className="inline-block px-6 py-2.5 mx-2 bg-sky-900 hover:border-2 hover:border-slate-200 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-24" type="submit" onClick={()=>handleSubmit()}>Submit</button>
                </div>
            </div> 
        </div>
      </section>
    )
}

export default AddServiceRecord;
