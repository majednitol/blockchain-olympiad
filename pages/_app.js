// import { NavBar } from '@/components'
import {React, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HealthProvider from '@/context/Health'
import '@/styles/globals.css'
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "@/components/dev";

const App = ({Component, pageProps}) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (<HealthProvider>
        {/* <NavBar/> */}
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <Component {...pageProps} />
        </DevSupport>
    </HealthProvider>)
}

export default App

