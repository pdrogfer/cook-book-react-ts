import RecipeRowItem from './RecipeRowItem';
import { Recipe } from '../models/Recipe';

function RecipeTable(props: { recipes: Recipe[], deleteRecipe: Function }) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Ingredients</th>
                    <th scope='col'>Instructions</th>
                </tr>
            </thead>
            <tbody>
                {props.recipes.map((recipe) => (
                    <RecipeRowItem
                        key={recipe.rowNumber}
                        recipe={recipe}
                        onClick={() => {
                            console.log('Recipe deleted:', recipe.name);
                            props.deleteRecipe(recipe.rowNumber);
                        }
                    }
                    />
                ))}
            </tbody>
        </table>
    );
}

export default RecipeTable;