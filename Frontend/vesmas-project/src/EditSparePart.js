import './index.css';
import React, {useState,setState, useEffect} from 'react';
import {ReactSession} from 'react-client-session';
const axios = require('axios');

function EditSparePart() {
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [idClicked, setIdClicked] = useState(null);

    useEffect(() => {
        const clicked = ReactSession.get("sparePartClicked");
        setName(clicked.name);
        setPrice(clicked.price);
        setIdClicked(clicked.id);
        console.log(clicked);
      }, []);
    
    const handleInputChange = (event) => {
      const {id, value} = event.target;
      if(id === 'name') {
        setName(value);
      }
      if(id === 'price') {
        setPrice(value);
      }
    }
    
    const handleSubmit = (event) => {
      const {id} = event.target;
      console.log(idClicked,id,name,price)
      if(id === 'edit'){
        axios.put(`http://localhost:3112/vesmas/sparepart`, {
          id: idClicked,
          name: name,
          price: price
        }).then(function(response) {
          console.log(response);
          if(response.data.message == 'sparepart edited successfully') {
            window.location.href = '/homeadmin';
          }else{
            alert('Something went wrong');  
          } 
          }).catch(function(error) {
          console.log(error);
        });
      }
      if(id === 'delete'){
        axios.delete(`http://localhost:3112/vesmas/sparepart`,{params:{
          id: idClicked
        }}).then(function(response) {
          console.log(response);
          if(response.data.message == 'sparepart deleted successfully') {
            window.location.href = '/homeadmin';
          }else{
            alert('Something went wrong');
          } 
          }).catch(function(error) {
          console.log(error);
        });
      }
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
                  <h4 className="text-3xl text-sky-900 font-bold mt-1 mb-12 pb-1 ">Edit Spare Part</h4>
                </div>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-solid border-4 border-orange-500 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg"
                      id="name"
                      placeholder="Spare Part Name"
                      value={name}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-orange-500 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg"
                      id="price"
                      placeholder="Spare Part Price"
                      value={price}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="text-right pt-1 mb-12 pb-1">
                    <button
                      className="inline-block px-6 py-2.5 mr-5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:bg-sky-900 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-24 mb-3"
                      type="button"
                      id='edit'
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={(e) => {handleSubmit(e)}}
                    >
                      Edit
                    </button>
                    <button
                      className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:bg-sky-900 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-24 mb-3"
                      type="button"
                      id='delete'
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={(e) => {handleSubmit(e)}}
                    >
                      Delete
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

export default EditSparePart;
