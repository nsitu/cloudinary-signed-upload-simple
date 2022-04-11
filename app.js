require('dotenv').config()
const express = require('express')
const path = require('path')
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
});

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/signupload', function (req, res) {
  const timestamp = Math.round((new Date).getTime()/1000);
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      source: 'uw',
      folder: 'signed_upload_demo_uw'
    }, 
    process.env.API_SECRET
  );
  res.json({
    signature: signature,
    timestamp: timestamp,
    cloudname: process.env.CLOUD_NAME,
    apikey: process.env.API_KEY
  })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.info(`Server is up on http://localhost:${port}`))

