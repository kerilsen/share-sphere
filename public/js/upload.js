const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const Material = require('Material.js');

const app = express();

// Configure Cloudinary -- having trouble getting the env variables to work
cloudinary.config({
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET
});

// Set up Multer for file upload
const storage = multer.diskStorage({});
const upload = multer({ storage });

// This is a mess - need Evelyn to help incorporate into MVC
// Handle image upload
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path); // {public_id: `${communityName}/${category}/${itemName}`}
        // automatically transforms image to same size - centers on the most interesting part - automatically formats it and provides best quality for the format
        // console.log(cloudinary.url(`${communityName}/${category}/${itemName}`, {transformation: {width: 300, height: 300, crop: "thumb", gravity: "auto", fetch_format: "auto", quality: "auto"}}));
        const newItem = new Material (
            $('#itemName').text,
            result.secure_url,
            $('#itemCost').text,
            $('#available').value,
            $('#categories').value,
            $('#itemDescription').text,
        );
        
        console.log(newItem);
        // Send the image URL back to the client
        res.send(`Image uploaded successfully. Image URL: ${result.secure_url}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error uploading image');
    }
});