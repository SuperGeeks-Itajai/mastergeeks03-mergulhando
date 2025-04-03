import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from "./Rotas" 


const contentor = document.getElementById("root")

const origem = createRoot(contentor) 


origem.render(<Rotas/>)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas />
  </StrictMode>,
)
