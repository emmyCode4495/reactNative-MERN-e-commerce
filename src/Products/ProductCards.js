import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProductsData } from '../data/ProductData'
import { useNavigation } from '@react-navigation/native'

const ProductCards = ({p}) => {
  const navigation =useNavigation()

  //More details function
  const handleMorebutton =(id)=>{
    navigation.navigate('productDetails',{ _id:id})
    console.log(id)
  }

  //Add to cart function
  const handleAddToCart  = ()=>{
    alert("Added to cart")
  }
  return (
    <View>
     <View style={styles.card}>
        <Image source={{uri:p?.imageUrl}} style={styles.cardImage}/>
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>{p?.description.substring(0,30)} ...more</Text>
     <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={()=>handleMorebutton(p._id)}>
          <Text style={styles.btnText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
          <Text style={styles.btnText}>ADD TO CART</Text>
        </TouchableOpacity>
     </View>
    </View>
    </View>
  )
}

export default ProductCards

const styles = StyleSheet.create({
card:{
  borderWidth:1,
  borderColor:'lightgray',
  marginVertical:5,
  marginHorizontal:8,
  width:"45%",
  padding:10,
  backgroundColor:"#ffffff",
  justifyContent:'center'
},
cardImage:{
  height:100,
  width:"100%",
  marginBottom:10
},
cardTitle:{
fontSize:10,
fontWeight:"bold",
marginBottom:5
},
cardDesc:{
  fontSize:10,
  textAlign:"left"
},
btnContainer:{
  marginTop:5,  
  flexDirection:'row',
  justifyContent:"space-evenly",
  alignItems:'center'
},
btn:{
  backgroundColor:"#000000",
  height:20,
  width:70,
  borderRadius:5,
  justifyContent:"center"
},
btnCart:{
  backgroundColor:"orange",
  height:20,
  width:70,
  borderRadius:5,
  justifyContent:"center"
},
btnText:{
  color:"#ffffff",
  textAlign:'center',
  fontSize:10,
  fontWeight:"bold"
}
})