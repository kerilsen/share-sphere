const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

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

// Serve HTML form to upload image
app.get('/', (req, res) => {
  res.send(`
  <form action="/upload" method="post" enctype="multipart/form-data" id="uploadForm">
  <label for="itemName">Enter the item name: </label>
  <input type="textarea" size="50px" id="itemName" placeholder="i.e. Shade canopy" /><br><br>
  <label for="itemDescription">Give a brief description of your item:</label><br>
  <textarea rows="4" cols="50" name="itemDescription" id="itemDescription"
      placeholder="A white 10' x 10' 'one person setup' shade canopy with wheel bag and ground stakes"></textarea><br><br>
  <label for="categories">Choose a category for your item: </label>
  <input list="categories" placeholder="Events">
  <datalist id="categories">
      <option value="Camping" />
      <option value="Events" />
      <option value="Exercise" />
      <option value="Children" />
      <option value="Hardware" />
      <option value="Medical" />
      <option value="Outdoor" />
      <option value="Discover passes" />
      <option value="Games" />
  </datalist><br><br>

  <label for="itemCost">What is the replacement cost for your item?</label>
  <input type="textarea" size="10px" id="itemCost" placeholder="$50.00" /><br>
  <p>Is the item currently available for loan?
      <input type="radio" id="available" name="availability" value="available">
      <label for="available">Yes</label>
      <input type="radio" id="notAvailable" name="availability" value="notAvailable">
      <label for="notAvailable">No</label><br>
  </p>
  <p>Upload a picture of your item</p>
  <input type="file" name="image" id="imageFile" />
  <button type="submit">Upload</button>
</form>
  `);
});

// Handle image upload
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path); // {public_id: `${communityName}/${category}/${itemName}`}
    // automatically transforms image to same size - centers on the most interesting part - automatically formats it and provides best quality for the format
    // console.log(cloudinary.url(`${communityName}/${category}/${itemName}`, {transformation: {width: 300, height: 300, crop: "thumb", gravity: "auto", fetch_format: "auto", quality: "auto"}}));

    // Send the image URL back to the client
    res.send(`Image uploaded successfully. Image URL: ${result.secure_url}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading image');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});