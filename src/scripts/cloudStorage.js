// NPM packages
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Project files
import { cloudStorageInstance } from "./firebase";
import readImage from "./upload-image/readImage";
import dataUrlToFile from "./upload-image/dataUrlToFile";

export async function uploadFile(file, filename) {
  const storageReference = ref(cloudStorageInstance, filename);
  await uploadBytes(storageReference, file);

  return await getDownloadURL(storageReference);
}

export async function uploadImage(event, filename) {
  const file = event.target.files[0];
  const originalImage = await readImage(file);
  const imageForFirebase = await dataUrlToFile(
    originalImage,
    `${filename}.png`
  );
  const newImageURL = await uploadFile(imageForFirebase, filename);

  return newImageURL;
}
