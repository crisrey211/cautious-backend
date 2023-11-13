import { createContext, useState } from "react";

// 1º Crear un contexto
export const FilterContext = createContext()

// 2º Crear el Provider, para proveer el contexto
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        nombre: '',
        id: ''
    })

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    )
}