const express = require ('express');

const app = express();

var request = require('request')
// var CronJob = require('cron').CronJob;
const cron = require('node-cron');


    cron.schedule('59 23 * * *', function() {
    console.log('---------------------');
    console.log('Running Cron Job');
    const link = 'https://fastrideapp.com/api/taxi/commands/admin.saveChannel';
    var data = `{
        "id : 1",
        "channelName : اقتصادي",
        "currency : MRU",
        "isActive : true",
        "kiloPrice :  23",
        "minPrice : 100"}`
    var json_obj = JSON.parse(data);
    request.post({
        headers: {'content-type': 'application/json'},
        url: link,
        form: json_obj
    }, async function(error, response, body) {
         if (!error && await response.statusCode == 200) {
              console.log('im ok and price is update')
            
         }else{
             console.log(error);
         }
     })
    
  }, null, true, "Africa/Nouakchott");

  // the sucend function 
  cron.schedule('59 6 * * *', function() {
    console.log('---------------------');
    console.log('Running Cron Job');
    const link = 'https://fastrideapp.com/api/taxi/commands/admin.saveChannel';
    var data = `{
        "id : 1",
        "channelName : اقتصادي",
        "currency : MRU",
        "isActive : true",
        "kiloPrice :  23",
        "minPrice : 70"}`
    var json_obj = JSON.parse(data);
    request.post({
        headers: {'content-type': 'application/json'},
        url: link,
        form: json_obj
    }, async function(error, response, body) {
         if (!error && await response.statusCode == 200) {
              console.log('im ok and price is update')
            
         }else{
             console.log(error);
         }
     })
    
  }, null, true, "Africa/Nouakchott");