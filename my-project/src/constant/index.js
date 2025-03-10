import {GoGoal} from "react-icons/go";
import {GrPlan} from "react-icons/gr";
import {
    IoIosStats,
    IoIosSettings,
    IoIosPerson,
    IoIosPersonAdd,
    IoIosEyeOff,
    IoIosLogIn,
    IoIosLogOut,


} from "react-icons/io"

import {
    FaChartBar,
    FaCalenderAlt,
    FaFacebookMessenger,
    FaUsersCog,
    FaListAlt,
} from "react-icons/fa";

import user01 from "assets/user01.png";
import user02 from "assets/user02.png";
import user03 from "assets/user03.png";


export const links=[
    {
        href:"#",
        icons:FaChartBar,
        text:"Dashboard",
    },
    {
        href:"#",
        icons:FaCalenderAlt,
        text:"Kanban",
        badge:{
            text:"Pro",
            color:"bg-gray-1000 text-gray-800",
            darkColor:"dark:bg-gray-700 dark:text-gray-300"
        },
    },
    {
        href:"#",
        icons:"FaFacebookMessenger",
        text:"Inbox",
        badge:{
            text:"4",
            color:"bg-blue-100 text-blue-800",
            darkColor:"dark:bg-blue-900 dark:text-blue-300",
        },
    },
    {
        href:"#",
        icon:FaUsersCog,
        text:"Users",
    },
    {
        href:"#",
        icon:FaListAlt,
        text:"Products",
    },
    {
        href:"#",
        icon:IoIosLogin,
        text:"Sign In",
    },
    {
        href:"#",
        icon:IoIosLogOut,
        text:"Sign up",
    },
];

     export const employeesData=[
        {
            title:"Total Employees",
            icons:IoIosPerson,
            count:200,
            bgColor:"bg-gray-100"
        },
        {
            title:"New Leave",
            icons:IoIosEyeOff,
            count:25,
            bgColor:"bg-blue-100"
        },
        {
            title:"New Joinee",
            icons:IoIosPersonAdd,
            count:25,
            bgColor:"bg-yellow-100"
        },
     ];

     export const shortcutLinks=[
        {
             title:"Goals",
             icons:"GoGoal",
        },
        {
            title:"Plan",
            icons:"GrPlan",
        },
        {
            title:"Stats",
            icon:IoIosStats,
        },
        {
            title:"Setting",
            icon:IoIosSettings,
        },

     ];

     export const users=[
         {
            name:"Rpbert Fox",
            country:"USA",
            role:"Python Developer",
            image:user01,
            bgColor:"bg-yellow-100",
         },
         {
            name:"Jane Doe",
            country:"UX",
            role:"Frontend Developer",
            image:user02,
            bgColor:"bg-blue-100",
         },
         {
            name:"John Smith",
            country:"Canada",
            role:"Backend Developer",
            image:user03,
            bgColor:"bg-gray-100",
         },
         {
            name:"Alice Johnson",
            country:"Australia",
            role:"Full stack Developer",
            image:user01,
            bgColor:"bg-slate-100",
         },
     ];

     export const events=[
        {
            date:"01 Aug",
            title:"Upcoming Event",
            description:"Lorem Ipsum Dolr sit amet"
        },
        {
            date:"20 Sept",
            title:"Networking meet Up",
            description:"Connect eith proj=fessional in  your field"
        },
     ];