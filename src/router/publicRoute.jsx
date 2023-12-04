import Home from '../pages/Home/Home'
import Auth from '../pages/auth/Auth'

//Create Public Router

const publicRouter = [

    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/auth',
        element: <Auth/>
    },
]

export default publicRouter