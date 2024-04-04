import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';
import { useState } from 'react';




const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// console.log(app)

function App() {
  const [users, setUsers] = useState(null);


  const handleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const users = result.user;
        setUsers(users);

        console.log(users)
      }).catch(e => {
        console.log('error', e)
      })
  };


  return (
    <>
      <div>
        <h1>FireBase + React</h1>
        <button onClick={handleSingIn}>SIng In</button>
        <div style={{
          border: "1px solid gray",
          borderRadius: '10px'
        }}>
          <h2>User:{users?.displayName}</h2>
          <h2>Email:{users?.email}</h2>
          <img src={users?.photoURL} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
