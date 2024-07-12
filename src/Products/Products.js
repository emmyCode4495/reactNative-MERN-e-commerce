import { View, Text } from 'react-native'
import React from 'react'
import ProductCards from './ProductCards'
import { ProductsData } from '../data/ProductData'

const Products = () => { 
  return (
    <View>
       {ProductsData.map((p) => (
        <ProductCards key={p._id} p={p}/>
      ))}
    
    </View>
  )
}

export default Products