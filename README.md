# Cloudinary signed upload example
This code has been adapted from [https://github.com/cloudinary-devs/cld-signed-upload-examples](https://github.com/cloudinary-devs/cld-signed-upload-examples). It demonstrates a signed upload with Cloudinary's upload widget from the browser, using NodeJS to create the signature. 

## Setup 
You need to set the following environment variables. They correspond to account details available in the Cloudinary dashboard.   
CLOUD_NAME=xxxxxxxxx  
API_KEY=xxxxxxxxx  
API_SECRET=xxxxxxx  
  
Run the app to start the server:  
`node app.js`  

The response should be:  
`Server is up on http://localhost:3000`  
  
Open `http://localhost:3000` in a browser.  