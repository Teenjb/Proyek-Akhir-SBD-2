import './index.css';
import React, {useState,setState, useEffect} from 'react';
import {ReactSession} from 'react-client-session';
const axios = require('axios');

function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    
    const handleInputChange = (event) => {
      const {id, value} = event.target;
      if(id === 'username') {
        setUsername(value);
      }
      if(id === 'password') {
        setPassword(value);
      }
    }
    
    const handleSubmit = () => {
      axios.get(`https://vesmas.azurewebsites.net/vesmas/login`, {params:{
        username: username,
        password: password
      }}).then(function(response) {
        console.log(response);
        if(response.data.message == 'logedin') {
          ReactSession.set("username", username);
          window.location.href = '/home';
          //alert('logedin');
        }else{
          alert('password incorect');
        } 
        }).catch(function(error) {
        console.log(error);
      });
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
                  <h4 className="text-7xl text-sky-900 font-bold mt-1 mb-12 pb-1 ">VESMAS</h4>
                </div>
                <form>
                  <p className="mb-4">Please login to your account</p>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-solid border-4 border-orange-500 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-orange-500 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none shadow-lg"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="text-center pt-1 mb-12 pb-1">
                    <button
                      className="inline-block px-6 py-2.5 bg-sky-900 text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:bg-orange-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-48 mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={() => {handleSubmit()}}
                    >
                      Log in
                    </button>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      className="inline-block px-6 py-2 border-2 border-orange-500 text-orange-500 font-medium text-xs leading-tight uppercase rounded-xl hover:bg-orange-500 hover:text-white  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={() => {window.location.href = '/Register'}}
                    >
                      Register
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

export default Login;
