import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import ChatScreen from '../screens/ChatScreen';
import GroupScreen from '../screens/GroupScreen';
import AddGroupScreen from '../screens/AddGroupScreen';
import UserChatScreen from '../screens/UserChatScreen';

const Stack = createStackNavigator();
console.disableYellowBox = true;
function ChatFlow() {
    return (
        <NavigationContainer>
            <Stack.Navigator name="Chat">
                <Stack.Screen
                    name="SignUpPage"
                    component={SigninScreen}
                    options={{ headerShown : false }}
                />
                
                <Stack.Screen
                    name="GroupPage"
                    component={GroupScreen}
                    options={{ headerShown : false }}
                />
                <Stack.Screen
                    name="AddGroupPage"
                    component={AddGroupScreen}
                    options={{ title : "Add Group" }}
                />
                <Stack.Screen
                    name="ChatPage"
                    component={ChatScreen}
                    options={{ title : "Chats" }}
                />
                <Stack.Screen
                    name="UserChatPage"
                    component={UserChatScreen}
                    options={{headerShown : false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}

function MainStackNavigator(){
    return(
      ChatFlow()
    );
}

export default MainStackNavigator;