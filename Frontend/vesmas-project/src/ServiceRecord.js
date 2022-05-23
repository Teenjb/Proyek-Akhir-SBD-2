import './index.css';
import React, {useState,setState, useEffect} from 'react';
import {ReactSession} from 'react-client-session';
import { Button,Table } from '@mui/material';
const axios = require('axios');

function ServiceRecord() {

  return (
  <section className="h-full gradient-form bg-slate-200 md:h-screen">
    <div className="container mx-auto py-12 px-6 h-full">
      <div className="flex justify-center items-start flex-wrap h-full g-6 text-gray-800">
        <div className="xl:w-full h-20 bg-sky-900 mb-4">
        </div>
        <div className="xl:w-full h-96 bg-yellow-500">
        </div>
        <div className="flex justify-end xl:w-full h-10">
            <Button className='bg-sky-900 text-white rounded-lg'>
                <span>Back To Home</span>
            </Button>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ServiceRecord;
