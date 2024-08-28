import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Home from "./Pages/Home";
export default function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-n-5 overflow-y-scroll">
      <Header />
      <div className="flex items-center justify-center flex-1  ">
        {/* <Signup /> */}
        {/* <Login/> */}
        <Home/>
      </div>
      <Footer />
    </div>
  );
}
