import React, {useState} from 'react'

function App() {
    var [count, setcount] = useState(0);
    return (
        <div>
            {count}
            <button onClick={() => setcount(++count)}>hello</button>
            everything can be customised
        </div>
    )
}

export default App
