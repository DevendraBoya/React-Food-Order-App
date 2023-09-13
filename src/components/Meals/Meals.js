import { Fragment } from "react"
import MealsSummery from "./MealsSummery";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
    return(
    <Fragment>
        <MealsSummery></MealsSummery>
        <AvailableMeals></AvailableMeals>
    </Fragment>)
}

export default Meals;