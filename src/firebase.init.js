// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGrtqLIahisg1OfMRV5Fbq76NQtNN1BAI",
    authDomain: "independent-service-prov-57284.firebaseapp.com",
    projectId: "independent-service-prov-57284",
    storageBucket: "independent-service-prov-57284.appspot.com",
    messagingSenderId: "335919203352",
    appId: "1:335919203352:web:df6b1a2e722184cffe2f6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;