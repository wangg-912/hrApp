import Login from "./login/Login";
import App from "./Main/App/App";

import PostManage from "./Main/App/PostManage/Index";
import PostDetail from "./Main/App/PostManage/PostDetial/Index";


import PersonManage from "./Main/App/PersonalCenter/Index";
import MemberManage from "./Main/App/PersonalCenter/MemberCenter/Index";
import OtherInfo from "./Main/App/PersonalCenter/InfoManage/Index";
import Recomment from "./Main/App/PersonalCenter/Recomment/Index";


const routes = [
    {
        path: '/',
        component: Login,
        exact: true,
    },
    {
        path: '/index',
        component: App,
        exact: true,
    },
    {
        path: '/posts',
        component: PostManage,
        exact: true,
    },
    {
        path: '/post/:id',
        component: PostDetail,
        exact: true,
    },
    {
        path: '/persons',
        component: PersonManage,
        exact: true,
    },
    {
        path: '/member',
        component: MemberManage,
        exact: true,
    },
    {
        path: '/info',
        component: OtherInfo,
        exact: true,
    },
    {
        path: '/code',
        component: Recomment,
        exact: true,
    }
    ,{
        component: App
    }
];

export  default routes;