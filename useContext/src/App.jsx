import './App.css'
import { Filters } from './components/Filters'
import { Users } from './components/Users'
import { useFilters } from './hooks/useFilters'
import { useFetch } from './useFetch'

function App() {

  const { initialUsers } = useFetch("https://reqres.in/api/users")
  const { filterUsers } = useFilters()
  const filteredUsers = filterUsers(initialUsers)



  return (
    <div style={{ display: "flex" }}>
      <Users users={filteredUsers} />
      <Filters />
    </div>
  )
}
export default App

