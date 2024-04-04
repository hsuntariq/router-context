import React, { useState, useContext, createContext } from 'react'
import { data } from './data'

const PersonContext = createContext()


const Drilling = () => {
    const [myData, setMyData] = useState(data)
    const removePerson = (id) => {
        const newPeople = myData.filter((item) => {
            return item.id !== id
        })

        setMyData(newPeople)
    }


    return (
        <PersonContext.Provider value={{
            removePerson,
            myData
        }}>

            <List />

        </PersonContext.Provider>
    )
}

const List = () => {
    return <SinglePerson />
}


const SinglePerson = () => {
    const data = useContext(PersonContext)
    const { removePerson, myData } = data
    return (
        <>
            <div className="card p-3 my-2 w-25 mx-auto">

                {myData.map((item) => {
                    return (
                        <>
                            <div className="card p-3 my-3">

                                <h5>{item.id}</h5>
                                <h5>{item.name}</h5>
                                <h5>{item.email}</h5>
                                <button onClick={() => removePerson(item.id)} className="btn btn-danger">
                                    Remove
                                </button>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}



export default Drilling