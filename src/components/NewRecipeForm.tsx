import React, { useState } from 'react';

export const NewRecipeForm: React.FC<{addNewRecipe: Function}> = (props) => {

    const [recipeName, setRecipeName] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');
    const submitRecipe = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!recipeName || !recipeIngredients || !recipeInstructions) {
            alert('Please fill in all fields');
            return;
        }
        props.addNewRecipe(recipeName, recipeIngredients, recipeInstructions);
        // Reset form fields
        setRecipeName('');
        setRecipeIngredients('');
        setRecipeInstructions('');
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label htmlFor='recipeName' className='form-label'>Recipe Name</label>
                    <input
                        type='text'
                        className='form-control'
                        id='recipeName'
                        placeholder='Enter recipe name'
                        required
                        value={recipeName}
                        onChange={e => setRecipeName(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='ingredients' className='form-label'>Ingredients</label>
                    <textarea
                        className='form-control'
                        id='ingredients'
                        rows={3}
                        placeholder='List ingredients'
                        required
                        value={recipeIngredients}
                        onChange={e => setRecipeIngredients(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='instructions' className='form-label'>Instructions</label>
                    <textarea
                        className='form-control'
                        id='instructions'
                        rows={3}
                        placeholder='Enter cooking instructions'
                        required
                        value={recipeInstructions}
                        onChange={e => setRecipeInstructions(e.target.value)} />
                </div>
                <button
                    type='submit'
                    className='btn btn-primary'
                    onClick={submitRecipe}>
                    Add Recipe
                </button>
            </form>
        </div>
    );
};