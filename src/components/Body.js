import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import ButtonList from './ButtonList'

const Body = () => {
    return (
        <>
            <div className=''>
                <Sidebar />
                <ButtonList/>
                <MainContainer />
            </div>
        </>
    )
}

export default Body