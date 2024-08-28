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
import plan1 from "../assets/plan1.png";
import plan2 from "../assets/plan2.png";
import plan3 from "../assets/plan3.png";
import plan4 from "../assets/plan4.png";
import gift1 from "../assets/gift1.png";
import gift2 from "../assets/gift2.png";
import gift3 from "../assets/gift3.png";
import gift4 from "../assets/gift4.png";

export const sidebarIcon = 
[
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
export const footerIcons = 
[facebook, insta, youtube, linkedin];
export const footernavigation = 
[
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
export const footerLinks =
[
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
export const cardData ={
  plan1:{
    id:"0",
    title:"Bowling Royal Pin",
    price:"$10",
    image:plan1,
    features:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  plan2:{
    id:"1",
    title:"Mini Golf",
    price:"$15",
    image:plan2,
    features:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  plan3:{
    id:"2",
    title:"Arcade Games",
    price:"$20",
    image:plan3,
    features:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  plan4:{
    id:"3",
    title:"Go-Kart Racing",
    price:"$25",
    image:plan4,
    features:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
}
export const giftData = {
  gift1: {
    id: "0",
    title: "Gift 1",
    price: "$10",
    image: gift1,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  gift2: {
    id: "1",
    title: "Gift 2",
    price: "$15",
    image: gift2,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  gift3: {
    id: "2",
    title: "Gift 3",
    price: "$20",
    image: gift3,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  gift4: {
    id: "3",
    title: "Gift 4",
    price: "$25",
    image: gift4,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
};