import React from 'react'
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'Match',
        path: '/match',
        icon: <AiIcons.AiOutlineBlock />,
        cName: 'nav-text'
    },
    {
        title: 'Caregivers',
        path: '/pages/caregivers',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'

    },
    {
        title: 'Bookings',
        path: '/pages/bookings',
        icon: <AiIcons.AiOutlineCalendar />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiOutlineGlobal />,
        cName: 'nav-text'
    },

]