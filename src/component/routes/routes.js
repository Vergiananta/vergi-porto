import Biography from "../biography/Biography";
import Dashboard from "../dashboard/Dashboard";
import Skill from "../skill/Skills";


const routes = [
    {
        path: '/dashboard',
        component: <Dashboard/>,
        exact : true,
    },
    {
        path: '/dashboard/skill',
        component: <Skill/>,
        exact : true,
    },
    {
        path: '/dashboard/biography',
        component: <Biography/>,
        exact : true
    }
]

export default routes;