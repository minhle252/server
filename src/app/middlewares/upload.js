const cloudinary = require("cloudinary");
require("dotenv").config();

cloudinary.config({
  Cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

exports.uploads = (file, folder) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      (result) => {
        resolve({
          url: result.url,
          id: result.public_id,
        });
      },
      {
        resouce_type: "auto",
        folder: folder,
      }
    );
  });
};
