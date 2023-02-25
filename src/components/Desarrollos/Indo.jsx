import React from 'react'
import ReactPlayer from 'react-player'

const Indo = () => {
    return (
        <>
            <div className ="flex flex-cols py-8 px-6 ">
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=e6qNM45bUHg'
                    className='react-player'
                    controls
                    playIcon	
                    width='1000px'
                    height='563px' 
                />
            </div>

            <div className ="flex flex-cols py-8 px-6 ">
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=0a1AdQCK8yY'
                    className='react-player'
                    controls
                    playIcon	
                    width='1000px'
                    height='563px' 
                />
            </div>

            <div className ="flex flex-cols py-8 px-6 ">
                <ReactPlayer
                    url=' https://www.youtube.com/watch?v=pnsNE5oqZOo&t=3s'
                    className='react-player'
                    controls
                    playIcon	
                    width='1000px'
                    height='563px' 
                />
            </div>

        </>
    )
}


export default Indo
