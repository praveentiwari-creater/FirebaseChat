import 'react-native-gesture-handler';
import React from 'react';
import {View,Text} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';

export default function App(){
  return <MainStackNavigator/>
 

}





























// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SignInScreen from './src/screens/SigninScreen';
// import GroupScreen from './src/screens/GroupScreen';
// import ChatScreen from './src/screens/ChatScreen';
// import AddGroupScreen from './src/screens/AddGroupScreen';
// //import firebase from './src/firebase/Firebase';
// import UserChatScreen from './src/screens/UserChatScreen';

// const Stack = createStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//         <Stack.Navigator name="Chat">
//             <Stack.Screen
//                 name="SignUpPage"
//                 component={SigninScreen}
//                 options={{ headerShown : false }}
//             />
            
//             <Stack.Screen
//                 name="GroupPage"
//                 component={GroupScreen}
//                 options={{ headerShown : false }}
//             />
//             <Stack.Screen
//                 name="AddGroupPage"
//                 component={AddGroupScreen}
//                 options={{ title : "Add Group" }}
//             />
//             <Stack.Screen
//                 name="ChatPage"
//                 component={ChatScreen}
//                 options={{ title : "Chats" }}
//             />
//             <Stack.Screen
//                 name="UserChatPage"
//                 component={UserChatScreen}
//                 options={{headerShown : false }}
//             />
//         </Stack.Navigator>
//     </NavigationContainer>
    
// );

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>

  //     {/* <Stack.Screen
  //         name="SplashScreen"
  //         component={SplashScreen}
  //         options={{ headerShown: false }}
  //       /> */}

  //       <Stack.Screen
  //         name="SignInScreen"
  //         component={SignInScreen}
  //         options={{ headerShown: false }}
  //       />

  //       <Stack.Screen
  //         name="GroupsScreen"
  //         component={GroupsScreen}
  //         options={{ title: 'Groups' }}
  //       />
  //       <Stack.Screen
  //         name="AddGroupsScreen"
  //         component={AddGroupsScreen}
  //         options={{ title: 'Add Groups' }}
  //       />
  //       <Stack.Screen
  //         name="ChatScreen"
  //         component={ChatScreen}
  //         options={{ title: 'Chats' }}
  //       />

  //     </Stack.Navigator>
  //   </NavigationContainer>
  // )
// }
// export default App;

// // import * as React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import SignInScreen from '../screens/SignInScreen';
// // import GroupsScreen from '../screens/GroupsScreen';
// // import ChatScreen from '../screens/ChatScreen';
// // import AddGroupsScreen from '../screens/AddGroupsScreen';
// // //import firebase from '../firebase/Firebase';

// // const Stack = createStackNavigator();
// // function App() {
// //     return (
// //         <NavigationContainer>
// //             <Stack.Navigator >
// //                 <Stack.Screen
// //                     name="SignInScreen"
// //                     component={SignInScreen}
// //                     // options={{ headerShow: false }}
// //                      />

// //                 <Stack.Screen
// //                     name="GroupsScreen"
// //                     component={GroupsScreen}
// //                     // options={{ title:'Groups' }} 
// //                     />

// //                    <Stack.Screen
// //                     name="AddGroupsScreen"
// //                     component={AddGroupsScreen}
// //                     // options={{ title:'Add Groups'}}
// //                      />

// //                 <Stack.Screen
// //                     name="ChatScreen"
// //                     component={ChatScreen}
// //                     // options={{  title:'Chats' }}
// //                      />

// //             </Stack.Navigator>
// //         </NavigationContainer>
// //     )
// // }

// // // function App(){
// // //     return(
// // //         ChatFlow()
// // //     )
// // // }

// // export default App;































// import React from 'react';
// import {View,Text} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import page1 from './Component/page1';
// import Page2 from './Component/Page2';

// const Stack = createStackNavigator();
// function App(){
//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="page1" component={page1} />
//         <Stack.Screen name="Page2" component={Page2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }
// export default App;