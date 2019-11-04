import React, {useState} from 'react'
import Navbar from "./Navbar"
import MainWindow from "./MainWindow"
import ToggleNavbar from "./ToggleNavbar"
import '../styles/layout.css'
const Layout = () => {
    const [hidden, setHidden] = useState(false)
    return (
        <div id="layout">
            <ToggleNavbar hidden={hidden} toggleHidden={setHidden} />
            <Navbar hidden={hidden}/>
            <MainWindow />

            
            
        </div>
    )
}

export default Layout
