import React, { useContext } from 'react'
import { AppContext } from '../context/Context'
import Button from './Button'

const Test2 = () => {
    const data = useContext(AppContext)
    const { items } = data
    return (
        <>
            {items.map((item) => {
                return (
                    <>
                        <div className="card p-4">
                            <h5>{item.id}</h5>
                            <h5>{item.name}</h5>
                            <h5>{item.email}</h5>
                            <Button id={item.id} />
                        </div>

                    </>
                )
            })}
        </>
    )
}

export default Test2