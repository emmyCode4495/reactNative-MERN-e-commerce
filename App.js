import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import ProductDetails from './src/Products/ProductDetails';
import Cart from './src/screens/Cart';
import CheckoutScreen from './src/screens/CheckoutScreen';
import Payment from './src/payments/Payment';
import Login from './src/screens/auth/Login';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import AccountScreen from './src/screens/AccountScreen';
import Notification from './src/screens/Notification';
import Profile from './src/screens/Profile';
import MyOrdersScreen from './src/screens/MyOrdersScreen';
import AdminPanel from './src/screens/admin/AdminPanel';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='home'>
      <Stack.Screen
      name='home'
      component={Home}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen
      name='mobile'
      component={About}
      options={{
        headerShown:false
      }}
      />
       <Stack.Screen
      name='productDetails'
      component={ProductDetails}
      />
       <Stack.Screen
      name='cart'
      component={Cart}
      />
       <Stack.Screen
      name='checkout'
      component={CheckoutScreen}
      />
       <Stack.Screen
      name='payment'
      component={Payment}
      />
       <Stack.Screen
      name='register'
      component={RegisterScreen}
      options={{
        headerShown:false
      }}
      />
       <Stack.Screen
      name='login'
      component={Login}
      options={{
        headerShown:false
      }}
      />
         <Stack.Screen
      name='account'
      component={AccountScreen}
      />
           <Stack.Screen
      name='notification'
      component={Notification}
      />
             <Stack.Screen
      name='profile'
      component={Profile}
      />
                <Stack.Screen
      name='orders'
      component={MyOrdersScreen}
      />
      <Stack.Screen
      name='admin'
      component={AdminPanel}
      />
     </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
