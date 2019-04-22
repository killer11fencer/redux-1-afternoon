import {createStore} from 'redux'

let initialState = {
    name: '',
    category: '',
    first_name: '',
    last_name: '',
    ingredients: [],
    instructions: [],
    recipes: []


}
export const NAME = 'NAME'
export const CATEGORY = 'CATEGORY'
export const FIRST_NAME = 'FIRST_NAME'
export const LAST_NAME = 'LAST_NAME'
export const INGREDIENTS = 'INGREDIENTS'
export const INSTRUCTIONS = 'INSTRUCTIONS'
export const RECIPES = 'RECIPES'
 function reducer(state = initialState,action) {
const {type, payload} = action
    switch(type) {

    case NAME:
    return {...state, name: payload}
    case CATEGORY:
    return {...state, category: payload}
    case FIRST_NAME:
    return {...state, first_name: payload}
    case LAST_NAME:
    return {...state,last_name: payload}
    case INGREDIENTS:
     let newIngredient = [...state.ingredients, payload]
        return {...state, ingredients: newIngredient}
    case INSTRUCTIONS:
    let newInstruction = [...state.instructions, payload]
    return {...state, instructions: newInstruction}
    case RECIPES:
    const { name,
    category,
    first_name,
    last_name,
    ingredients,
    instructions} =
    state;

    const recipe = {
        name,
        category,
        first_name,
        last_name,
        ingredients,
        instructions
    }
    let newRecipes = [...state.recipes, recipe]
    return {...state, recipes: newRecipes}
    default:
    return state
    }
    
}

export default createStore(reducer);