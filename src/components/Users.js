import { useState } from "react"

export const USERS =  [
    { name: 'name 1', id: 1 },
    { name: 'name 2', id: 2 },
    { name: 'name 3', id: 3 }
]

export const Users = ({ usersData = USERS }) => {
    const [users] = useState(usersData ? usersData : [])

    return (
        <>
            {
                users.length > 0 ? users.map(user => (
                    <h1 key={user.id}>{user.name}</h1>
                )) : <p>no data found</p>
            }
        </>
    )
}