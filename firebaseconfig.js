import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBW3HZrVHsBmRK4CQO0eh2hVaXNgJ_NnOc",
  authDomain: "otsd-697c3.firebaseapp.com",
  projectId: "otsd-697c3",
  storageBucket: "otsd-697c3.appspot.com",
  messagingSenderId: "615826914589",
  appId: "1:615826914589:web:9ad8017bb368745613f5f4"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;
  export const database = getFirestore(app);