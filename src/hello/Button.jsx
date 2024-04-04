import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

const Button = ({ id }) => {
    const { removePerson, items } = useContext(AppContext)
    return (
        <>
            <button onClick={() => removePerson(id)} className="btn btn-danger">
                Delete
            </button>
        </>
    )
}

export default Button