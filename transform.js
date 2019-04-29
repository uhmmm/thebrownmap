var data = require('./minard.json');
const fs = require('fs');

var newData = {};
newData.features = [];
newData.type = "FeatureCollection";

for(var i = 0; i < data.length; i++) {
  console.log(data[i])

  newData.features.push(data[i])
}

let newDataJSON = JSON.stringify(newData);  
fs.writeFileSync('gold.json', newDataJSON); 