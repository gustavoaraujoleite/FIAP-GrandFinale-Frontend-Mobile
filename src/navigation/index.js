import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import Home from "../screens/Home";
import Registration from "../screens/Registration";
import Research from "../screens/Research";
import Header from "../components/Header";
import TabBarIconModel from "../components/UI/TabBarIconModel";

export default function MainNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#394ade",
        tabBarInactiveTintColor: "#333",
        tabBarStyle: {
          height: 66,
          paddingBottom: 8,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          //   color: "#394ade",
          marginTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          header: () => <Header title="HOME" />,
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIconModel
                borderTopColor={focused ? "#394ade" : "transparent"}
                icon={
                  focused ? (
                    <MaterialCommunityIcons
                      name="home-outline"
                      size={24}
                      color="#394ade"
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="home-outline"
                      size={24}
                      color="#333"
                    />
                  )
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="REGISTRO"
        component={Registration}
        options={{
          header: () => <Header title="HOME" />,
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIconModel
                borderTopColor={focused ? "#394ade" : "transparent"}
                icon={
                  focused ? (
                    <AntDesign name="form" size={20} color="#394ade" />
                  ) : (
                    <AntDesign name="form" size={20} color="#333" />
                  )
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CONSULTA"
        component={Research}
        options={{
          header: () => <Header title="HOME" />,
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIconModel
                borderTopColor={focused ? "#394ade" : "transparent"}
                icon={
                  focused ? (
                    <Entypo name="magnifying-glass" size={24} color="#394ade" />
                  ) : (
                    <Entypo name="magnifying-glass" size={24} color="#333" />
                  )
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
