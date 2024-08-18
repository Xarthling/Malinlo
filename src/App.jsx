import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Main from "./Components/Main";
export default function App() {
  return (
   <div className="flex flex-col h-screen bg-n-5 overflowy-scroll"> 
   <Header/>
   <Main/>
   <Footer/>
   </div>  )
}