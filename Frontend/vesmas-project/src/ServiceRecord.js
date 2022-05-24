import './index.css';
import React, {useState,setState, useEffect} from 'react';
import {ReactSession} from 'react-client-session';
import { Button,Table, TableBody, TableContainer, TableHead, TableRow, TableCell } from '@mui/material';
const axios = require('axios');

function createData(serviceDate, sparePart, totalPrice) {
  return { serviceDate, sparePart, totalPrice };
}

const rows = [
  createData('1/1/2020', 'Spare Part 1', '$100'),
  createData('1/1/2020', 'Spare Part 2', '$200'),
  createData('1/1/2020', 'Spare Part 3', '$300'),
  createData('1/1/2020', 'Spare Part 4', '$400'),
  createData('1/1/2020', 'Spare Part 4', '$400'),
  createData('1/1/2020', 'Spare Part 4', '$400'),
  createData('1/1/2020', 'Spare Part 4', '$400'),
  createData('1/1/2020', 'Spare Part 4', '$400'),
  createData('1/1/2020', 'Spare Part 4', '$400'),
  createData('1/1/2020', 'Spare Part 4', '$400')
];

function ServiceRecord() {
  const vin = ReactSession.get("vinClicked");
  const name = ReactSession.get("nameClicked");
  const [serviceRecord, setServiceRecord] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:3112/vesmas/servicerecord`, {params:{
          vin: vin
        }}).then(function(response) {
          console.log(response.data);
          setServiceRecord(response.data);
          })
  }, []);

  if(!serviceRecord) {
    return(
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
        <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
      </div>
    )
  }

  return (
  <section className="h-full gradient-form bg-slate-200 md:h-screen">
    <div className="container mx-auto py-12 px-6 h-full">
      <div className="flex justify-center items-start flex-wrap h-full g-6 text-gray-800">
        <div className="flex justify-end items-center xl:w-full h-16 bg-sky-900 mb-4 px-12 rounded-lg">
          <h1 className="text-right text-2xl font-bold text-white">{name}</h1>
        </div>
        <div className="xl:w-full h-96">
          <TableContainer className='border-sky-900 border-4 h-full scrollbar-hide scroll-smooth rounded-lg'>
            <Table>
              <TableHead className='sticky top-0 bg-sky-900'>
                <TableRow>
                  <TableCell className='text-white text-xl text-center'>SERVICE DATE</TableCell>
                  <TableCell className='text-white text-xl text-center'>SPARE PART</TableCell>
                  <TableCell className='text-white text-xl text-center'>TOTAL PRICE</TableCell>  
                </TableRow>
              </TableHead>
              <TableBody>
                {serviceRecord.map((row) => (
                  <TableRow
                    key={row.serviceDate}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell >{row.service_date}</TableCell>
                    <TableCell >{row.name}</TableCell>
                    <TableCell >{row.price}</TableCell>
                  </TableRow>
                ))} 
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="flex justify-end xl:w-full h-10">
            <Button 
            className='bg-sky-900 text-white rounded-lg'
            onClick={() => {window.location.href = '/home'}}
            >
                <span>Back To Home</span>
            </Button>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ServiceRecord;