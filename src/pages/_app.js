import { isVariableDeclaration } from 'typescript'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  
  return (
  
  <div><Component {...pageProps}  />   
  
  <footer> 2023 Andres</footer>
  </div>

  )
}