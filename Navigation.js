import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'


import HomeScreen from './screens/HomeScreen'
import ImageScreen from './screens/ImageScreen'

export default Navigation = createAppContainer(
  createSwitchNavigator(
    {
        Home: HomeScreen,
        Image: ImageScreen
    }, 
    {
        initialRouteName: 'Home'
    }
  )
)