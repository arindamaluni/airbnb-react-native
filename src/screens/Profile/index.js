import { Auth } from 'aws-amplify';
import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';

const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
};

const ProfileScreen = () => {
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable
        onPress={signOut}
        style={{
          width: '60%',
          height: 40,
          backgroundColor: '#c3c3c3',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
          marginBottom: 10,
        }}>
        <Text style={{ fontWeight: 'bold' }}>Log Out </Text>
      </Pressable>
      <Button
        onPress={signOut}
        width={300}
        title="Log Out"
        color="red"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default ProfileScreen;
