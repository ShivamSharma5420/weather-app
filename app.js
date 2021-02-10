/*console.log("starting");

setTimeout(() => console.log("2 second timer"), 2000);
setTimeout(() => console.log("0 second timer"), 0);

console.log("stoping");*/


const request = require('request');

const utils = require('./utils/utils.js');

const url = "http://api.weatherstack.com/current?access_key=9bd98147c6457f9ce7e79fb6d56e8a03&query=27.1767,78.0081";


//making optional parameter json:true automatically parse the response data in JSON format

//json data return in response object under body property
// request({ url: url, json: true }, (error, response) => {
//     //const data = JSON.parse(response.body);
//     //console.log(data);
//     //console.log(data.current);

//     if (error) {
//         console.log("Unable to access the weather service");
//     }
//     else if (response.body.error) {
//         console.log("Unable to find location (may be input missing)")
//     }
//     else {

//         console.log("temperature is ", response.body.current.temperature);
//     }
// });


//geocoding  for location name to coordinates

// const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Agra.json?access_token=pk.eyJ1Ijoic2hpdmFtc2hhcm1hMTkiLCJhIjoiY2trdzg4dnVqMjQ0dTJucW5iMzUyc3Q5ZyJ9.MjV8SEAaPvrvM-kDxbi0-w";

// request({ url: geoCodeUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to access geocode");
//     }
//     else if (response.body.features.length === 0) {
//         console.log("Unable to find location (may be input missing)")
//     }
//     else {
//         console.log(response.body.features[0].center);
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];

//         console.log(longitude, latitude);
//     }
// });





utils.geoCode('Agra', (error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
        utils.weather(data.latitude, data.longitude, (error, data1) => {
            if (error)
                console.log(error);
            else
                console.log(data1.current.temperature);

        })
    }

});





