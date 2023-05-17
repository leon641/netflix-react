import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNfsUf32zCLfLuCAFResK3eb8CE6RpFqQ",
    authDomain: "netflix-react-proj-47790.firebaseapp.com",
    projectId: "netflix-react-proj-47790",
    storageBucket: "netflix-react-proj-47790.appspot.com",
    messagingSenderId: "352478990142",
    appId: "1:352478990142:web:5e676a25d459e1c6c1e66f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { auth, db };
  export default db;