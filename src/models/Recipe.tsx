export class Recipe {

    rowNumber: number;
    name: string;
    ingredients: string;
    instructions: string;

    constructor(
        rowNumber: number,
        name: string,
        ingredients: string,
        instructions: string
    ) {
        this.rowNumber = rowNumber;
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}