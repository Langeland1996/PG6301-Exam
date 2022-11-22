import React, {useState} from "react";

function FormInput({ label, value, onChangeValue }) {
    return (
        <div>
            <label>
                <strong>{label}</strong>{" "}
                <input value={value} onChange={(e) => onChangeValue(e.target.value)} />
            </label>
        </div>
    );
}

export function AddNewMeal({ createMeal }) {
    const [dish, setDish] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [allergies, setAllergies] = useState("");
    const [vegan, setVegan] = useState("");
    const [vegetarian, setVegetarian] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        createMeal({ dish, ingredients, allergies, vegan, vegetarian });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add new movie</h1>

            <FormInput label={"dish:"} value={dish} onChangeValue={setDish} />
            <FormInput label={"Ingredient:"} value={ingredients} onChangeValue={setIngredients} />
            <FormInput label={"Allergies"} value={allergies} onChangeValue={setAllergies} />
            <FormInput label={"Vegan"} value={vegan} onChangeValue={setVegan} />
            <FormInput label={"Vegetarian"} value={vegetarian} onChangeValue={setVegetarian} />
            <button>Submit</button>
        </form>
    );
}