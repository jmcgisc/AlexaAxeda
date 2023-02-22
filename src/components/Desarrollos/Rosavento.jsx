import React from 'react'
import ReactPlayer from 'react-player'

const Rosavento = () => {
    return (
        <>
            <div className ="flex flex-cols py-8 px-6 ">
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=e6qNM45bUHg'
                    className='react-player'
                    playing
                    width='30%'
                    height='30%'
                />
            </div>
        </>
    )
}

export default Rosavento
