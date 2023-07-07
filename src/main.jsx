import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/RouteProvider'
import AuthProvider from './AuthProvider/AuthProvider'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'





const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <Toaster />
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
 
  
  </React.StrictMode>,
)
