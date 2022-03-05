import React from "react";
import "./style.css";

export default function App() {
  const [name, setName] = React.useState(false)

  function fun(){
    
    setName(!name)
    
  }
  return (
    <div>
      
     <button onClick={fun}>{name? "Akash" : "Aman"}</button>
      
    </div>
  );
}
