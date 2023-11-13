import { useEffect, useState } from "react";


export function useFetch(url) {
    const [initialUsers, setInitialUsers] = useState("")
    useEffect(()=>{

    async function getData() {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("No se pudo obtener la información.");
            }
            const data = await response.json()
            setInitialUsers(data)
        } catch (error) {
            console.error(error)
        }
    }
        getData()
    },[])

    return { initialUsers}
}