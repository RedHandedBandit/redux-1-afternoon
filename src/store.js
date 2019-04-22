import { createStore } from 'redux';

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const AUTHOR_FIRST_NAME = 'AUTHOR_FIRST_NAME'
export const AUTHOR_LAST_NAME = 'AUTHOR_LAST_NAME'
export const INGREDIENTS = 'INGREDIENTS'
export const INSTRUCTIONS = 'INSTRUCTIONS'
export const RECIPE = 'RECIPE'

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NAME:
            return {...state, name: action.payload}
        case UPDATE_CATEGORY:
            return {...state, category: action.payload}
        case AUTHOR_FIRST_NAME: 
            return {...state, authorFirst: action.payload}
        case AUTHOR_LAST_NAME:
            return {...state, authorLast: action.payload}
        case INGREDIENTS:
            const newIngredients = [...state.ingredients, action.payload]
            return {...state, ingredients: newIngredients}
        case INSTRUCTIONS: 
            const newInstruction = [...state.instructions, action.payload]
            return {...state, instructions: newInstruction}
        case RECIPE:
            const {name, category, authorFirst, authorLast, ingredients, instructions} = state
            const recipe = {
                name, category, authorFirst, authorLast, ingredients, instructions
            }
            const newRecipes = [...state.recipes, recipe]
            return {...state, recipes: newRecipes}
        default:
            return state
    }
}

export default createStore(reducer)
