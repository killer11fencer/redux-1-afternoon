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
export const RECIPES = 'RECIPE'
 function reducer(state = initialState,action) {
switch(action.type) {

    case NAME:
    return {...state, name: payload}
    case CATEGORY:
    return {...state, name: payload}
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
    case RECIPE:
    let newRecipe = [...state.recipes, recipe]
    return {...state,newRecipe}
    default:
    return state
    }
    
}

export default createStore(reducer);