import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductsData } from '../data/ProductData'
import Layout from '../../src/components/Layout/Layout'

const ProductDetails = ({route}) => {
  // console.log(route)
const [pDetails, setPDetails] = useState({})
const [qnty, setQnty] = useState(1)
  useEffect(() => {
  const getProduct = ProductsData.find((p) => {
    return p?._id === params?._id
  })
  setPDetails(getProduct)
  },[params?._id])
  //get product details
  const handleAddQty = () =>{
    if (qnty === pDetails?.quantity) return alert("Addition limit reached!")
    setQnty((prev)=> prev + 1)
  }

  const handleMinusQty = () =>{
    if (qnty === 1) return alert("Negative stock not supported!")
    setQnty((prev)=> prev - 1)
  }
  useEffect
  const {params} = route
  return (
    <Layout>
     <Image
     source={{uri:pDetails?.imageUrl}}
     style={styles.image}
     />
     <View style={styles.title}>
      <Text style={styles.title}>{pDetails?.name}</Text>
      <Text style={styles.title}>Price : ${pDetails?.price}</Text>
      <Text style={styles.desc}>Price : ${pDetails?.description}</Text>
      <View style={styles.qntyLeft}>
        <Text style={styles.qntyText}>{pDetails?.quantity} Pc(s) Left</Text>
        </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={pDetails?.quantity > 0 ?styles.btnCart: styles.btnCart1}
        disabled={pDetails?.quantity <= 0}
        >
          <Text style={styles.btnCartText}>{
            pDetails?.quantity > 0 ? 'ADD TO CART' : 'OUT OF STOCK'
          }</Text>
        </TouchableOpacity>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnQty}
            onPress={handleMinusQty}
          >
            <Text style={styles.btnPcsText}>-</Text>
            </TouchableOpacity>
          <Text>{qnty}</Text>
          <TouchableOpacity style={styles.btnQty}
          onPress={handleAddQty}
          >
            <Text style={styles.btnPcsText}>+</Text>
            </TouchableOpacity>
        </View>
      
      </View>
      
     </View>
    </Layout>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  image:{
    height:300,
    width:"100%"
  },
  title:{
    fontSize:18,
    textAlign:"left"
  },
  container:{
    marginVertical:15,
    marginHorizontal:10
  },
  desc:{
    fontSize:12,
    textTransform:'capitalize',
    textAlign:'justify',
    marginVertical:10
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
    marginVertical:20,
    marginHorizontal:10,
  },
  btnCart:{
    width:180,
    backgroundColor:"#000000",
    borderRadius:5,
    height:40,
    justifyContent:"center"
  },
  btnCart1:{
    width:180,
    backgroundColor:"lightgray",
    borderRadius:5,
    height:40,
    justifyContent:"center"
  },
  btnCartText:{
    color:"#ffffff",
    fontWeight:"bold",
    textAlign:"center",
    fontSize:16
  },
  btnCartText1:{
    color:"lightgray",
    fontWeight:"bold",
    textAlign:"center",
    fontSize:16
  },
  btnQty:{
    backgroundColor:"lightgray",
    width:40,
    alignItems:"center",
    marginHorizontal:10
  },
  btnPcsText:{
    fontSize:20,
    fontWeight:"bold",
  },
  qntyLeft:{
    borderWidth:0.4,
    borderColor:"lightgray",
    marginLeft:5,
    marginRight:5,
    width:70,
    borderRadius:5,
    padding:5,
    backgroundColor:'lightgray'
  },
  qntyText:{
    fontWeight:'bold',
    fontSize:10,
    textTransform:'uppercase',
    color:"#ffffff"
  }
})