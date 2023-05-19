// import { NavBar } from '@/components'

import HealthProvider from '@/context/Health'
import '@/styles/globals.css'

const App = ({ Component, pageProps }) =>
(<HealthProvider>
  {/* <NavBar/> */}
  <Component {...pageProps} />
</HealthProvider>

)
export default App

