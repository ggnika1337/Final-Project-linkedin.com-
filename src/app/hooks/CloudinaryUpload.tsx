"use server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
});

export async function uploadImage(formData: FormData) {
  const file = formData.get("image") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  console.log(file);  
  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .unsigned_upload_stream(
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
        {},
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        },
      )
      .end(buffer);
  });

  return result.secure_url;
}
