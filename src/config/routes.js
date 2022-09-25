// Layout

import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

//Admin Pages

import AdminHome from '../pages/Admin';
import AdminSingIn from '../pages/Admin/SignIn';

//User Pages

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Elements from '../pages/Elements';

// Other

import Error404 from '../pages/Error404';

//

const routesAdmin = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        element: AdminHome,
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        element: AdminSingIn,
    },
];

const routesUser = [
    {
        path: "/",
        layout: LayoutBasic,
        element: Home,
    },
    {
        path: "*",
        layout: LayoutBasic,
        element: Error404,  
    },
    {
        path: "/contact",
        layout: LayoutBasic,
        element: Contact,
    },
    {
        path: "/elements",
        layout: LayoutBasic,
        element: Elements,
    }
];
const routes = [...routesAdmin, ...routesUser];


export default routes;
