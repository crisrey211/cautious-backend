import React, { useState } from "react"
import { useContext } from "react"
import { FilterContext } from "../context/filters"

export function Filters() {

    const { setFilters } = useContext(FilterContext)

    const handleOptionChange = (ev) => {
        setFilters((prevState) => ({ ...prevState, id: ev.target.value }))
    }
    return (
        <div style={{ padding: "2em" }}>
            <h1>Filtros</h1>
            <div style={{ display: "flex", flexFlow: "column", gap: "2rem" }}>
                <input placeholder="Inserte nombre" />
                <label htmlFor="userId">ID usuario</label>
                <select id="userId" onChange={handleOptionChange}>
                    <option value="">Seleccione un id</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>

        </div>
    )
}