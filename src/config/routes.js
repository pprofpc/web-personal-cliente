// Layout

import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

//Admin Pages

import AdminHome from '../pages/Admin';
import AdminSingIn from '../pages/Admin/SignIn';

//User Pages

import Home from '../pages/Home';
import Contact from '../pages/Contact';

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
    }
];

const routesUser = [
    {
        path: "/",
        layout: LayoutBasic,
        element: Home,
    },
    {
        path: "/contact",
        layout: LayoutBasic,
        element: Contact,
    }
];
const routes = [...routesAdmin, ...routesUser];

export default routes;
