import axios from "axios";
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function JsonServer () {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/Veniamin2003/stair-calc-json/railTypes')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
}