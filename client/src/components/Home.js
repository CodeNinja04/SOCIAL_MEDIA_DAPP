import React, { useState, useEffect } from 'react'
import { useMoralis } from "react-moralis";
import Logout from "./Logout";

const Home = () => {
   const { isAuthenticated, user, authenticate,isAuthenticating } = useMoralis();
   const [current,setCurrent]=useState(null); 
   const [role,setRole]=useState();
   
useEffect(() => {
     setCurrent(user);
     console.log(current);
 
}, [user])
 

    if (!isAuthenticated|| current==null || current===undefined ) {
      <button onClick={() => authenticate()}>Authenticate</button>;
      
      
      return (
        <div>
          {/* <button onClick={() => authenticate()}>Authenticate</button> */}
          PLEASE WAIT
          <button onClick={() => authenticate()}>Authenticate</button>;



        </div>
      );
    }

  else if (role === "artist"){

    <div>HELLO ARTIST</div>

  }  

  else{

      
  
   return (
     <div>
       HOME
       <div>
         <Logout />
       </div>
       <p>USERNAME : {current.get("username")}</p>
       <p>ADDRESS : {current.attributes.role}</p>
       <p><img src={current.attributes.imagehash} height={200} width={200} /></p>
     </div>
   );
}
}
 
export default Home;
  




