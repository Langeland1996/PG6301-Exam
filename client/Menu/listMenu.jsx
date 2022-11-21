import React from "react";
import {useLoading} from "../Middleware/useLoading";
import {Link} from "react-router-dom";

export function ListMenu({ listMenu }) {
  const { loading, error, data } = useLoading(listMenu);

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
      <h1>Meals to order.</h1>
      <button>
        <Link to={"/menu/vegan"}>Display vegan meals</Link>
      </button>
        &nbsp;&nbsp;
      <button>
        <Link to={"/menu/vegetarian"}>Display vegetarian meals</Link>
      </button>
      <ul>
        {data.map((e) => (
            <>
            <li key={e.Dish}>Dish: {e.Dish}</li>
            <li key={e.Dish}>Ingredients: {e.Ingredients}</li>
            <li key={e.Dish}>Allergies: {e.Allergies}</li>
            <li key={e.Dish}>Vegan: {e.Vegan}</li>
            <li key={e.Dish}>Vegetarian: {e.Vegetarian}</li>
            <br></br>
            </>
        ))}
      </ul>
      <Link to={"/frontpage"}>Go back to homepage</Link>
    </div>
  );
}

export class listMenu {
}