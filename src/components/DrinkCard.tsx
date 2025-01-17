import { useAppStore } from "../stores/useAppStore"
import { DrinkType } from "../types"

type drinkProp = {
    drink: DrinkType
}

export default function DrinkCard({ drink }: drinkProp) {
    const { getRecipeById } = useAppStore()

    const handleButton = (id: DrinkType['idDrink']) => {
        getRecipeById(id)
    }

    return (
        <div className="border shadow-lg">
            <div className="overflow-hidden">
                <img src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`}
                    className="hover:scale-125 transition-transform hover:rotate-2"
                />
            </div>
            <div className="p-5">
                <h2 className="text-2xl truncate font-black">
                    {drink.strDrink}
                </h2>
                <button type="button"
                    onClick={() => (handleButton(drink.idDrink))}
                    className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg">
                    Ver receta
                </button>

            </div>
        </div>
    )
}