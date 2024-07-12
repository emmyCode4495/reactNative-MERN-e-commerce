import { View, Text, StyleSheet,ScrollView} from 'react-native'
import React from 'react'

const OrderItem = ({order}) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text>order ID: {order._id}</Text>
        <Text>Date: {order.date}</Text>
        </View>
        <View>
        <Text>Product Name: {order.productInfo.name}</Text>
        <Text>Price: {order.productInfo.price}</Text>
        <Text>Quantity: {order.productInfo.qty}</Text>
        <Text>Total Amount: {order.totalAmount}</Text>
        <View>
            <Text style={styles.status}>Order Status: {order.status}</Text>
        </View>
        </View>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff",
        margin:10,
        padding:10,
        borderRadius:10
    },
    orderInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:'lightgray',
        paddingBottom:5
    },
    status:{
        borderTopWidth:1,
        fontWeight: "bold",
        borderColor:'lightgray',
        padding:5
    }
})