import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import API_KEY from './keys';


//creating customhook useGoogleSearch


const CONTEXT_KEY = "YOUR_API_KEY_HERE"
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(res => res.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchData()

    }, [term])

    return { data }
}

export default useGoogleSearch

//2.14