import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter, Outlet } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <ChakraProvider>
    <App />
 
  </ChakraProvider>
  </BrowserRouter>
)
