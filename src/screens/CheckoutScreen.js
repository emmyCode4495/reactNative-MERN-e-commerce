import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CheckoutScreen = ({navigation}) => {
    const handleCOD =() =>{
        alert("Order placed successfully!")
    }

    const handleOnline = () =>{
        alert("complete payment in the nextpage")
        navigation.navigate('payment')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Options</Text>
      <Text style={styles.price}>Total Amount: $101</Text>
      <View style={styles.card}>
        <Text style={styles.paymentHeading}>Select your Payment Method</Text>
        <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
            <Text style={styles.paymentBtnText}>Cash on Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}
        >
            <Text style={styles.paymentBtnText}>Online (CREDIT | DEBIT CARD)</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        height:"90%"
    },
    heading:{
        fontSize:25,
        fontWeight:'500',
        marginVertical:20,
    },
    price:{
        fontSize:20,
        marginBottom:10,
        color:'gray'
    },
    card:{
        backgroundColor:'#ffffff',
        width:"90%",
        borderRadius:10,
        padding:30,
        marginVertical:10
    },
    paymentHeading:{
        color:'gray',
        marginBottom:10
    },
    paymentBtn:{
        backgroundColor:'#000000',
        height:40,
        borderRadius:10,
        justifyContent:'center',
        marginVertical:10
    },
    paymentBtnText:{
        color:"#ffffff",
        textAlign:"center"
    }
})