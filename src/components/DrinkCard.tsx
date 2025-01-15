import { DrinkType } from "../types"

type drinkProp = {
    drink: DrinkType
}

export default function DrinkCard({ drink }: drinkProp) {
    return (
        <div>
            {drink.strDrink}
        </div>
    )
}