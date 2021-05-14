import { useState } from "react"
import { Users } from "./Users"

const App = _ => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h3>Counter Component</h3>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <h3>Users List Component</h3>
            <Users />
        </>
    )
}

export default App
