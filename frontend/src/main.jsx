import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import * as ReactDOM from 'react-dom/client' 
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter> {/*to have multiple pages as routes in our application*/}
      <ChakraProvider>
      <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

//copy pasted from https://v2.chakra-ui.com/getting-started/vite-guide

