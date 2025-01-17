import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    const [searchFilter, setSearchFilter] = useState({
        ingredient: '',
        category: ''
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setSearchFilter({
            ...searchFilter,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Object.values(searchFilter).includes('')) {
            showNotification({ text: 'Todos los campos son obligatorios', error: true })
            return
        }
        searchRecipes(searchFilter)
    }

    const { fetchCategories, categories: { drinks }, searchRecipes, showNotification } = useAppStore()
    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink to="/"
                            className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}
                        >Inicio</NavLink>
                        <NavLink to="/favoritos"
                            className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}
                        >Favoritos</NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                        onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <label htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Nombre o ingredientes</label>
                            <input type="text" name="ingredient" id="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o ingredientes ej: Café, Whisky"
                                onChange={handleChange}
                            />

                        </div>
                        <div className="space-y-4">
                            <label htmlFor="category"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Nombre o categoría</label>
                            <select name="category" id="category"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                onChange={handleChange}
                            >
                                <option value="">--Seleccione categoría--</option>
                                {drinks.map(cat => (
                                    <option value={cat.strCategory} key={cat.strCategory}>{cat.strCategory}</option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" value="Buscar receta"
                            className="cursor-pointer bg-orange-800 hover:bg-orange-900
                        text-white font-extrabold w-full p-2 rounded-lg uppercase"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}