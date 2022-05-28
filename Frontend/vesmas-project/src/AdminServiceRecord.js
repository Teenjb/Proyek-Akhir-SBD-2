import './index.css';
import React, {useState,setState, useEffect} from 'react';
import {ReactSession} from 'react-client-session';
const axios = require('axios');

function AdminServiceRecord() {
    const [name, setName] = useState(null);
    const [type, setType] = useState(null);
    const [brand, setBrand] = useState(null);
    const [vin, setVin] = useState(null);
    const [status, setStatus] = useState(null);
    const [vins,setVins] = useState(null);
    

    useEffect(() => {
      const data = ReactSession.get("vehicleAdmin");
      const status = ReactSession.get("vehiclefound");
      const vins = ReactSession.get("vins");
      console.log(data);
      setName(data.name);
      setType(data.type);
      setBrand(data.brand);
      setVin(data.vin);
      setStatus(status);
      setVins(vins);
    }, []);
    
    
    const handleInputChange = (event) => {
      const {id, value} = event.target;
      if(id === 'name') {
        setName(value);
      }
      if(id === 'brand') {
        setBrand(value);
      }
      if(id === 'type') {
        setType(value);
      }
    }
    
    const handleSubmit = () => {
      if(!status){
      axios.post(`http://localhost:3112/vesmas/kendaraan`, {
        vin:vins,
        brand:brand,
        type:type,
        name:name
      }).then(function(response) {
        console.log(response);
        if(response.data.message == 'vehicle created successfully') {
          window.location.href = '/addservicerecord';
        }else{
          alert('Something went wrong');
        } 
        }).catch(function(error) {
        console.log(error);
      });
      }else{
        window.location.href = '/addservicerecord';
      }
      ReactSession.set("vinServiced",vin||vins);
    }

  return (
  <section className="h-full gradient-form bg-slate-200 md:h-screen">
    <div className="container mx-auto py-12 px-6 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="xl:w-6/12">
          <div className="lg:flex lg:flex-wrap g-0">
            <div className="lg:w-full px-4 md:px-0">
              <div className="md:p-12 md:mx-6">
                <div className="text-center">
                  <h4 className="text-3xl text-sky-900 font-bold mt-1 mb-12 pb-1 ">Service Record VESMAS</h4>
                </div>
                <form>
                  <div className="mb-4">
                  <h2 className="text-lg text-sky-900 font-bold mb-2">Vehicle Brand</h2>
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-solid border-4 border-orange-500 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg"
                      id="brand"
                      placeholder="Vehicle Brand"
                      value={brand}
                      readOnly={status}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="mb-4">
                  <h2 className="text-lg text-sky-900 font-bold mb-2">Vehicle Name</h2>
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-orange-500 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg"
                      id="name"
                      placeholder="Vehicle Name"
                      value={name}
                      readOnly={status}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="mb-4">
                    <h2 className="text-lg text-sky-900 font-bold mb-2">Vehicle Type</h2>
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-orange-500 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg"
                      id="type"
                      placeholder="Vehicle Type"
                      value={type}
                      readOnly={status}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="mb-4">
                  <h2 className="text-lg text-sky-900 font-bold mb-2">Vehicle Identity Number</h2>
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-orange-500 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg"
                      id="vins"
                      placeholder="Spare Part Price"
                      value={vin||vins}
                      readOnly={true}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="text-right pt-1 mb-12 pb-1">
                    <button
                      className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:bg-sky-900 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-24 mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={() => {handleSubmit()}}
                    >
                      next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default AdminServiceRecord;
