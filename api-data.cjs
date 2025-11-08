const https = require('https');

function fetchData() {
  https.get('https://690dbf51bd0fefc30a02251a.mockapi.io/artwork', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        console.log('API Data Structure:');
        console.log(JSON.stringify(jsonData, null, 2));
        
        if (jsonData.length > 0) {
          console.log('\nFirst item structure:');
          console.log(JSON.stringify(jsonData[0], null, 2));
        }
      } catch (err) {
        console.error('Error parsing JSON:', err);
      }
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}

fetchData();