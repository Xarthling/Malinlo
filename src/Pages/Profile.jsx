import Sidebar from "../Components/Layout/Sidebar";
import Button from "../Components/smallButton";
import Mock from "../assets/mock.svg";
const Profile = () => {
  
  return (
    <div>
       <div className="flex justify-end m-3 ">
          <Button onClick={() => alert("Button clicked!") } children="Add New"/>
        </div>
        <div className="w-full p-3 flex justify-between items-center border-n-6 border-solid border rounded-md">
          <div className="flex  items-center gap-2 sm:gap-2 md:gap-4">
            <img src={Mock} alt="" />
            <h3 className="h4">Betty</h3>
          </div>
          <p className="p sm:p-1 text-center">3 Days ago you send a gift</p>
          <Button children=">"/>
        </div>
    </div>
  )
}

export default Profile
