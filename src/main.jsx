import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Router/router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Auth from './Auth/Auth';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
         <Auth> <RouterProvider router={router}></RouterProvider></Auth>
        </HelmetProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </div>
)
