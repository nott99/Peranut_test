const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());
app.get('/api/trips', (req, res) => {

  const {  keyword } = req.query;
  if(keyword){
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:9000/trips?q=${keyword}`,
      headers: { },
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  } else{
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:9000/trips`,
      headers: { },
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})