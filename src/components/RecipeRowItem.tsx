import React from 'react';
import { Recipe } from '../models/Recipe';

export const RecipeRowItem: React.FC<{
    recipe: Recipe, 
    onClick: () => void
}> = (props) => {
    return (
        <tr onClick={props.onClick}>
            <th scope='row'>{props.recipe.rowNumber}</th>
            <td>{props.recipe.name}</td>
            <td>{props.recipe.ingredients}</td>
            <td>{props.recipe.instructions}</td>
        </tr>
    );
};