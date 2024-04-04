import React, { useContext } from 'react'
import { AppContext } from '../context/Context'
import Test2 from './Test2'

const Test = () => {
    const data = useContext(AppContext)

    return (
        <>
            <Test2 />
        </>
    )
}

export default Test