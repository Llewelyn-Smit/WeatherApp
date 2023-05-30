const express = require('express'); //Line 1

const moment = require('moment');

 

const app = express(); //Line 2

const port = process.env.PORT || 5000; //Line 3





app.get('/', (req, res) => {

  res.send('Server is running.'); // Or redirect to another route

});

 

// dont with it it works

app.get('/express_backend', async (req, res) => {

  try {

    const currentDate = moment();

    let data = [];

    let dateRange = [];

 

    for (let i = -3; i <= 1; i++) {

      const formattedDate = currentDate.clone().add(i, 'days').format('YYYY-MM-DD');
console.log(formattedDate);
      dateRange.push(formattedDate);

    }

    for (let date of dateRange) {

      let response = await fetch(`https://api.weatherapi.com/v1/history.json?key=e1181995b6bc491dbd6182017232305&q=New York&dt=${date}`);

      let  forecast  = await response.json();


      data.push(forecast);

    }
    let returnData = [];
    let fdays= [];
    data.forEach(element => {
      fdays.push(element.forecast.forecastday)
   
    });
   
  let normDays=[];  
    
fdays.forEach(element => {
   normDays.push(element)
});



var keyValuePairs = [];

fdays.forEach(function(innerArray) {
  innerArray.forEach(function(obj) {
    Object.entries(obj).forEach(function([key, value]) {
      if (key === "day" || key === "date") {
      keyValuePairs.push({ key: key, value: value });
      }
    });
  });
});

for (let i = 0; i < keyValuePairs.length; i++) {
  let obj = {
    date : keyValuePairs[i].value,
    temp : keyValuePairs[i+1].value.avgtemp_c,
     condition: keyValuePairs[i+1].value.condition.text,
    picture:keyValuePairs[i+1].value.condition.icon}
 i++;
  returnData.push(obj)
   }


    //console.log(data);
    console.log('about to send return data')
console.log(returnData);
res.set('Content-Type', 'application/json');
    res.json(returnData);

  } catch (error) {

    console.error(error);

    res.status(500).send({ error: 'An error occurred' });

  }

});





// This displays message that the server running and listening to specified port

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6


