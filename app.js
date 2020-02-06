console.log("Starting");
setTimeout(() =>{
  console.log('2 Second Timer')
},2000)
console.log("Stopping");

const request = require('request');
const url = 'https://api.darksky.net/forecast/74b3b6150ce5c7242ade55b731bb6b46/37.8267,-122.4233';
request({url:url,json:true},(error,response) =>{
    console.log("It is currently ",response.body.currently.temperature)
})