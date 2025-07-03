import React from 'react';
import { Recipe } from '../models/Recipe';

function RecipeRowItem(props: { recipe: Recipe, onClick: () => void }) {

    return (
        <tr onClick={props.onClick}>
            <th scope='row'>{props.recipe.rowNumber}</th>
            <td>{props.recipe.name}</td>
            <td>{props.recipe.ingredients}</td>
            <td>{props.recipe.instructions}</td>
        </tr>
    );
}

export default RecipeRowItem;