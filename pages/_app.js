// import { NavBar } from '@/components'
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HealthProvider from '@/context/Health'
import '@/styles/globals.css'


const App = ({ Component, pageProps }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (<HealthProvider>
        {/* <NavBar/> */}

        <Component {...pageProps} />

    </HealthProvider>)
}

export default App

