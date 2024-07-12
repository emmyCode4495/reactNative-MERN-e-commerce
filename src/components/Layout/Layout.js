import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
   <>
   <StatusBar/>
   <View>
    {children}
   </View>  
   <View style={styles.footer}>
   <Footer/>
   </View>
  
   </>
  )
}

export default Layout

const styles = StyleSheet.create({
  footer:{
    display:'flex',
    flex:1,
    width:"100%",
    justifyContent:"flex-end",
    zIndex:100,
    borderTopWidth:1,
    position:'absolute',
    borderColor:'lightgray',
    bottom:0,
    padding:10
  }
})