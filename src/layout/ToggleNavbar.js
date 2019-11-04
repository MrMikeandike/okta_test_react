import React from 'react'

const ToggleNavbar = (props) => {
    const toggle = () => {
        if(props.hidden) {
            props.toggleHidden(false)
        } else {
            props.toggleHidden(true)
        }
        
    }
    return (
        <div id="toggle-hidden-button" className={`${ props.hidden ? "hidden": "not-hidden"}`} onClick={toggle}>
            
            
        </div>
    )
}

export default ToggleNavbar
