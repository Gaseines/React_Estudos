import React from 'react'
import CounterChange from '../components/CounterChange'

import { useCounterContext } from '../hooks/useCounterContext'

const Products = () => {

  const {counter} = useCounterContext()

  return (
    <div>
      <h1>Products</h1>

    <p>O valor da contagem está em: {counter}</p>
      {/* Alterando valor do contexto */}
      <CounterChange />
    </div>
  )
}

export default Products
