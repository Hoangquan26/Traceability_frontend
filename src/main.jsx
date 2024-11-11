import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import { store } from './store/srote.js'
import { Provider } from 'react-redux' 
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
 
   <React.StrictMode>
      <Provider store={store}>
         <ToastContainer/>
         <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>

)
