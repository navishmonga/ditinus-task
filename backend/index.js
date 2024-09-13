const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
app.use(express.json());

app.post('/search', async (req, res) => {
  const search=req.body.search
  const fields=req.body.fields
  try {
    const response=await fetch(`https://restcountries.com/v3.1/name/${search}?fields=${fields.join(",")}`);
    const data=await response.json();
    res.send(data);
  } catch (error) {
    console.log(error)
  }
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
