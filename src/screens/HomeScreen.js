import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import useEffectScreen from './useEffectScreen';
import useStateScreen from './useStateScreen';

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="useState"
        options={{
          title: () => <Text>useState</Text>,
          tabBarIcon: () => <Text>1️⃣</Text>,
        }}
        component={useStateScreen}
      />
      <Tab.Screen
        name="useEffect"
        options={{
          title: () => <Text>useEffect</Text>,
          tabBarIcon: () => <Text>2️⃣</Text>,
          
        }}
        component={useEffectScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
