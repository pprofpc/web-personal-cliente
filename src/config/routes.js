// Layout

import LayoutAdmin from '../layouts/LayoutAdmin';

//Admin Pages

import AdminHome from '../pages/Admin';
import AdminSingIn from '../pages/Admin/SignIn';

const routes = [
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

export default routes;
