import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'
import { orderData } from '../data/OrderData'
import OrderItem from '../components/Form/OrderItem'

const MyOrdersScreen = () => {
  return (
    <Layout>
     <View style={styles.container}>
        <Text style={styles.headerText}>My Orders</Text>
        <ScrollView>
            {
                orderData.map(order =>(
                    <OrderItem key={order._id} order={order}/>
                ))
            }
        </ScrollView>
        </View>
    </Layout>
  )
}

export default MyOrdersScreen
const styles = StyleSheet.create({
    container:{
        marginTop:20
    },
    headerText:{
        textAlign:'center',
        color:'gray',
        fontWeight:'bold',
        fontSize:20
    }
})