import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
import Logo from "../assets/Logo.svg";
import Home from "../assets/home.svg";
import Profile from "../assets/profile.svg";
import Agenda from "../assets/agenda.svg";
import Setting from "../assets/setting.svg";
import Logout from "../assets/logout.svg";

export const sidebarIcon = [
  {
    id: "0",
    title: "Home",
    url: "#home",
    icon: Home, 
  },
  {
    id: "1",
    title: "Profile",
    url: "#profile",
    icon: Profile, 
  },
  {
    id: "2",
    title: "Agenda",
    url: "#agenda",
    icon: Agenda, 
  },
  {
    id: "3",
    title: "Setting",
    url: "#setting",
    icon: Setting, 
  },
  {
    id: "4",
    title: "Logout",
    url: "#logout",
    icon: Logout, 
  }
];

export const footerIcons = [facebook, insta, youtube, linkedin];

export const footernavigation = [
    {
      id: "0",
      title: "Home",
      url: "#home",
    },
    {
      id: "1",
      title: "Date",
      url: "#date",
    },
    {
      id: "2",
      title: "Time",
      url: "#time",
    },
    {
      id: "3",
      title: "Profile",
      url: "#profile",
    },
    {
        id: "4",
        title: "Contact Us",
        url: "#contact-us",
      },
]
export const footerLinks =[
    {
        id:"0",
        title:"Terms",
        url:"terms"
    },
    {
        id:"1",
        title:"Privacy",
        url:"privacy"
    },
    {
        id:"2",
        title:"Cookies",
        url:"cookies"
    },
]