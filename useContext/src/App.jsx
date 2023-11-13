import './App.css'
import { Filters } from './components/Filters'
import { Users } from './components/Users'
import { useFetch } from './useFetch'

function App() {

  const { initialUsers } = useFetch("https://reqres.in/api/users")

  return (
    <div style={{ display: "flex" }}>
      <Users users={initialUsers} />
      <Filters />
    </div>
  )
}
export default App

