
import {Header,Footer} from "./components/index";
import { Outlet } from "react-router-dom";




function App() {


  return (
    <>
    <div className="relative w-full overflow-hidden  items-center justify-center bg-black">
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
     
  
  
     <Header />
     <main>
      <Outlet />
     </main>
     </div>
     <Footer/>
    
    
    </>
  )
}

export default App
