import { useEffect, useState } from "react";


export function useFetch(url) {
    const [count, setCount] = useState("")
    useEffect(()=>{

    async function getData() {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("No se pudo obtener la información.");
            }
            const data = await response.json()
            setCount(data)
        } catch (error) {
            console.error(error)
        }
    }

        getData()
    },[])

    return {count}
}