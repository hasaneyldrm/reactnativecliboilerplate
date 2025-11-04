import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import WorkoutScreen from '@screens/WorkoutScreen/WorkoutScreen';
import StatsScreen from '@screens/StatsScreen/StatsScreen';
import ProfileScreen from '@screens/ProfileScreen/ProfileScreen';
import BottomTabBar from '@components/BottomTabBar';

export type TabStackParamList = {
  Home: undefined;
  Workout: undefined;
  Stats: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        // iOS benzeri daha akıcı tab geçişleri
        animation: 'shift',
        // @ts-ignore: Tab navigator resmi olarak cardStyleInterpolator desteklemiyor ancak çalışıyor
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workout" component={WorkoutScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
