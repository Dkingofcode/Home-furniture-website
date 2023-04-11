import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'
import { AddToCart } from '../components'

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART){
    const { id, color, amount, product } = action.payload; 
     const tempItem = state.cart.find((i) => i.id === id + color)
  }
  if(tempItem){
    const tempCart = state.cart.map(
      (cartItem) => {
        if (cartItem.id === id + color){
          let newAmount = cartItem.amount + amount
          if(newAmount > cartItem.max){
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount}
        }  else {
           return cartItem  
        }
      }
    )
  }
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
