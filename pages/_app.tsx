import '../styles/globals.css'
import type { AppProps } from 'next/app' 
import {ThirdwebWeb3Provider} from '@3rdweb/hooks' 

const supportedChainIds = [4]  /*rinkitey network*/
const connectors ={
  injected: {},               /*connector to metamask*/
}

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors} >

  <Component {...pageProps} />

  </ThirdwebWeb3Provider>
  )
}

export default MyApp
