import { useState } from 'react'

import reactLogo from './assets/react.svg'
import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { Provider } from "react-redux"
import store from "./store";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-slate-600">
      <div>
        <Provider store = {store}>
          <ChakraProvider>
            <Container maxW="container.lg" centerContent>
              <Heading as="h1" size="xl">SNAKE GAME</Heading>
            </Container>
          </ChakraProvider>
        </Provider>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-red-800">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
