import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
  const { cart } = useCartContext();
  if(cart.length < 1){
    return (
      <Wrapper>
        <div className='empty'>
        <h4>Your cart page is empty</h4>
        <Link to='/products' className='btn'>fill it</Link>
        </div>
      </Wrapper>
  
    )
  }

  return(
    <main>
     <PageHero title='cart' />
     <Wrapper className='phone'>
       <CartContent />
      </Wrapper> 
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
