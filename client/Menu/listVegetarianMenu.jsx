import {useLoading} from "../Middleware/useLoading";
import {Link} from "react-router-dom";
import React from "react";

export function ListVegetarianMenu({listMenuOnlyVegetarian}) {
    const {loading, error, data} = useLoading(listMenuOnlyVegetarian);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <div id="error-text">{error.toString()}</div>
            </div>
        );
    }

    return (
        <div>
            <h1>Vegetarian meals to order.</h1>
            <button>
                <Link to={"/menu"}>Display </Link>
            </button>
            &nbsp;&nbsp;
            <button>
                <Link to={"/menu/vegan"}>Display vegan meals</Link>
            </button>
            <ul>
                {data.map((e) => (
                    <ul key={e.Dish}>
                        <li>Dish: {e.Dish}</li>
                        <li>Ingredients: {e.Ingredients}</li>
                        <li>Allergies: {e.Allergies}</li>
                        <li>Vegan: {e.Vegan}</li>
                        <li>Vegetarian: {e.Vegetarian}</li>
                        <br></br>
                    </ul>
                ))}
            </ul>
            <Link to={"/frontpage"}>Go back to homepage</Link>
        </div>
    );
}