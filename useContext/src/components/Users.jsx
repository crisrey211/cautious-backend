import { useContext } from "react"
import { FilterContext } from "../context/filters"
import { useFetch } from "../useFetch"

export function Users({ users }) {

    return (
        <div className="card">
            <h1>Usuarios</h1>
            {users && users?.data.map((user, index) =>
                <ul key={index}>
                    <img width="120rem" src={`https://reqres.in/img/faces/${user.id}-image.jpg`} alt="avatares" />
                    <div className='info'>
                        <span>Nombre: {user.first_name}</span>
                        <span>Apellidos: {user.last_name}</span>
                        <span>Email: {user.email}</span>
                    </div>
                    <div>#{user.id}</div>
                </ul>)}
        </div>
    )
}

