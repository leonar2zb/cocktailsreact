import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {
    const { drinks } = useAppStore()
    const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])
    return (
        <>
            <h1>Recetas</h1>
            {
                hasDrinks ? (
                    drinks.drinks.map(drink => (
                        <DrinkCard key={drink.idDrink} drink={drink} />
                    )
                    )) : (
                    <p>No hay resultados aún. Use el formulario para buscar recetas</p>
                )
            }

        </>
    )
}