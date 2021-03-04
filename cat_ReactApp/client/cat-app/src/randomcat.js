import axios from "axios";
import React, { useState, useEffect } from "react"

function RandomCat() {
    const [cat, setCatUrl] = useState({})
    const [loadingState, setLoading] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:3000/catapi/random').then((e) => {
            console.log(e.data.id);
            setCatUrl(e.data)
            setLoading(false)
        })
    }, [loadingState])

    function showImg(cat) {
        // console.log(cat);
        return (
                <img src={cat.url} alt="catimg" style={{ maxWidth: "15rem" }}></img>
        )
    }
    return (
        <div className="randomcat">
                <h1>Show Cat</h1>
                <div style={{ display: loadingState ? 'block' : 'none',height: "200px"  }}>
                    loading...
                </div>
                <div style={{ display: loadingState ? 'none' : 'block',height: "200px" }}>
                {showImg(cat)}
                </div>
                <button onClick={() => { setLoading(true) }}>click me</button>
        </div>
    )
}

export default RandomCat;