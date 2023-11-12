export function Users({ count }) {
    return (
        <p className="card">
            <h1>Usuarios</h1>
            {count && count.data.map((user) =>
                <ul key={user.id}>
                    <img width="120rem" src={`https://reqres.in/img/faces/${user.id}-image.jpg`} alt="avatares" />
                    <div className='info'>
                        <span key={user.id}>Nombre: {user.first_name}</span>
                        <span key={user.id}>Apellidos: {user.last_name}</span>
                        <span key={user.id}>Email: {user.email}</span>
                    </div>
                    <div key={user.id}>#{user.id}</div>
                </ul>)}
        </p>
    )
}

