const express = require ('express');
const http = require('http');

const hostname = 'localhost';
const port = 4000;

const app = express();

var request = require('request')
// var CronJob = require('cron').CronJob;
const cron = require('node-cron');


    cron.schedule('59 23 * * *', function() {
    console.log('---------------------');
    console.log('Running Cron Job');
    const link = 'https://fastrideapp.com/api/taxi/commands/admin.saveChannel';
    request.post(
        {
          headers: { "content-type": "application/json" },
          url: link,
      
          json: true,
          body: {
            id: 1,
            channelName: " اقتصادي",
            currency: "MRU",
            isActive: true,
            kiloPrice: 23,
            minPrice: 100,
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVOdW1iZXIiOiIrMjQ5OTEzNTc3MTE2IiwidXNlcklkIjo0LCJ1c2VyVHlwZSI6IkFETUlOIiwiaWF0IjoxNjQwMzI5NDYwfQ.e7No_yA-LhdeKO3X1nDT2v8Ny8n99pb5blCjZmmEEWM",
          },
        },
        async function (error, response, body) {
          if (!error && (await response.statusCode) == 201) {
            console.log("im ok and main price is update from 70 to  100");
            console.log(body);
          } else {
            console.log(error);
          }
        }
      );
    
  }, null, true, "Africa/Nouakchott");

  
  cron.schedule('59 6 * * *', function() {
    console.log('---------------------');
    console.log('Running Cron Job');
    const link = 'https://fastrideapp.com/api/taxi/commands/admin.saveChannel';
    request.post(
        {
          headers: { "content-type": "application/json" },
          url: link,
      
          json: true,
          body: {
            id: 1,
            channelName: " اقتصادي",
            currency: "MRU",
            isActive: true,
            kiloPrice: 23,
            minPrice: 70,
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVOdW1iZXIiOiIrMjQ5OTEzNTc3MTE2IiwidXNlcklkIjo0LCJ1c2VyVHlwZSI6IkFETUlOIiwiaWF0IjoxNjQwMzI5NDYwfQ.e7No_yA-LhdeKO3X1nDT2v8Ny8n99pb5blCjZmmEEWM",
          },
        },
        async function (error, response, body) {
          if (!error && (await response.statusCode) == 201) {
            console.log("im ok and main price is update from 70 to  100");
            console.log(body);
          } else {
            console.log(error);
          }
        }
      );
    
  }, null, true, "Africa/Nouakchott");




  cron.schedule('59 23 * * *', function() {
    console.log('---------------------');
    console.log('Running Cron Job');
    const link = 'https://fastrideapp.com/api/taxi/commands/admin.saveChannel';
    request.post(
        {
          headers: { "content-type": "application/json" },
          url: link,
      
          json: true,
          body: {
            id: 2,
            channelName: " الدرجة اولى",
            currency: "MRU",
            isActive: true,
            kiloPrice: 23,
            minPrice: 120,
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVOdW1iZXIiOiIrMjQ5OTEzNTc3MTE2IiwidXNlcklkIjo0LCJ1c2VyVHlwZSI6IkFETUlOIiwiaWF0IjoxNjQwMzI5NDYwfQ.e7No_yA-LhdeKO3X1nDT2v8Ny8n99pb5blCjZmmEEWM",
          },
        },
        async function (error, response, body) {
          if (!error && (await response.statusCode) == 201) {
            console.log("im ok and main price is update from 100 to  120");
            console.log(body);
          } else {
            console.log(error);
          }
        }
      );
      
    
  }, null, true, "Africa/Nouakchott");

  cron.schedule('56 6 * * *', function() {
    console.log('---------------------');
    console.log('Running Cron Job');
    const link = 'https://fastrideapp.com/api/taxi/commands/admin.saveChannel';
    request.post(
        {
          headers: { "content-type": "application/json" },
          url: link,
      
          json: true,
          body: {
            id: 2,
            channelName: " الدرجة اولى",
            currency: "MRU",
            isActive: true,
            kiloPrice: 23,
            minPrice: 100,
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVOdW1iZXIiOiIrMjQ5OTEzNTc3MTE2IiwidXNlcklkIjo0LCJ1c2VyVHlwZSI6IkFETUlOIiwiaWF0IjoxNjQwMzI5NDYwfQ.e7No_yA-LhdeKO3X1nDT2v8Ny8n99pb5blCjZmmEEWM",
          },
        },
        async function (error, response, body) {
          if (!error && (await response.statusCode) == 201) {
            console.log("im ok and main price is update from 100 to  120");
            console.log(body);
          } else {
            console.log(error);
          }
        }
      );
      
    
  }, null, true, "Africa/Nouakchott");


  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

// app.listen((process.env.PORT|| 8800), ()=>{
//     console.log('Backend server running on port 8800')
// });

