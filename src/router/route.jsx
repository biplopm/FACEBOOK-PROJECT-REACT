import {createBrowserRouter} from 'react-router-dom'
import privateRouter from './privateRoute'
import publicRouter from './publicRoute'

//Create Router

const router = createBrowserRouter([...publicRouter, ...privateRouter])

export default router