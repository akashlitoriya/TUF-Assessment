import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/core/AppLayout'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import 'react-toastify/dist/ReactToastify.css';
import store from './store/store'
import {Provider} from 'react-redux'

const router = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/dashboard',
        element: <Dashboard />
      }
    ]
  },
  
])

function App() {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}>
        </RouterProvider>
        <ToastContainer/>
      </Provider>
    </>
    
  )
}

export default App
