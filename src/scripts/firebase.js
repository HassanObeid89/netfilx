import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfiguration = {
    apiKey: "AIzaSyBl847z5S0ootCQuE80dmvh7i-ggtACePk",
    authDomain: "netflix-92de3.firebaseapp.com",
    projectId: "netflix-92de3",
    storageBucket: "netflix-92de3.appspot.com",
    messagingSenderId: "306467387304",
    appId: "1:306467387304:web:48b426f49bfa2fc992cf9d"
};

const firebaseInstance = initializeApp(firebaseConfiguration);

export const fireStoreInstance = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);
export const cloudStorageInstance = getStorage(firebaseInstance);
