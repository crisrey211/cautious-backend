import './App.css'
import { Filters } from './components/Filters'
import { Users } from './components/Users'
import { FiltersProvider } from './context/filters'
import { useFetch } from './useFetch'

function App() {

  const { count } = useFetch("https://reqres.in/api/users")


  return (
    <FiltersProvider>
      <Filters />
      <Users count={count} />
    </FiltersProvider>
  )
}

export default App
