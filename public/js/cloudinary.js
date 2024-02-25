const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: 'sharesphere',
    uploadPreset: 'oectyd7o'
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      localStorage.setItem('uploadedImageURL', result.info.secure_url);
      document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
    }
  });

document.getElementById("upload_widget").addEventListener("click", function () {
  myWidget.open();
}, false);