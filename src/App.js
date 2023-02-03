import { useEffect,useState } from "react";
import Splash from './Splash';
function App() {
  const[splash,setSplash]=useState('')


  return (
    <div>
      <Splash></Splash>
    </div>
  );
}

export default App;
