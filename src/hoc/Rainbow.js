import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'orange']
    const randomColour=colours[Math.floor(Math.random()*2)]
    const className=randomColour+'-text'
    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent />
            </div>
        )
    }
}

export default Rainbow