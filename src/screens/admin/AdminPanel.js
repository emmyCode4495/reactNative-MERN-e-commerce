import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import Icon from 'react-native-vector-icons/AntDesign'

const AdminPanel = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.headertext}>Dashboard</Text>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
                <Icon
                name="edit"
                style={styles.icon}
                />
                <Text style={styles.btnText}>
                    Manage Products
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Icon
                name="edit"
                style={styles.icon}
                />
                <Text style={styles.btnText}>
                    Manage Categories
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Icon
                name="user"
                style={styles.icon}
                />
                <Text style={styles.btnText}>
                    Manage Users
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Icon
                name="bars"
                style={styles.icon}
                />
                <Text style={styles.btnText}>
                    Manage Orders
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Icon
                name="info"
                style={styles.icon}
                />
                <Text style={styles.btnText}>
                    About App
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

export default AdminPanel

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightgray',
        height:"96%",
    },
    headertext:{
        backgroundColor:'#000000',
        color:'#ffffff',
        textAlign:'center',
        padding:10,
        fontSize:20,
        margin:10,
        borderRadius:5,
        fontWeight:'bold'
    },
    btn:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ffffff',
        padding:20,
        borderRadius:10,
        elevation:10,
        marginBottom:20
    },
    btnContainer:{
       margin:10
    },
    icon:{
        fontSize:20,
        marginRight:10,
        marginLeft:5
    },
    btnText:{
        fontSize:20
    }
})