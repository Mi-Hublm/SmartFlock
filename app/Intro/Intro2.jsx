import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const Intro2 = () => {
  const navigation = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/images/farm-bro.png')}
          style={styles.image}/>
        <Text style={styles.text}> Farming made easy {'\n'}
          <Text style={{fontWeight: 'bold'}} > start, sow,{'\n'} and grow with us.</Text>
        </Text>
        <Pressable onPress={() => navigation.push('Intro/Terms')}>
          <Ionicons style={styles.button_icon} name="arrow-forward" size={45} color="black" />
        </Pressable>
      </View>

    </SafeAreaView>
  )
}

export default Intro2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    justifyContent: 'flex-end',
    padding: 20,
  },

  underline: {
    textDecorationLine: 'underline',
    textDecorationColor: '#FFC100',
    fontWeight: 'bold'
  },
  button_icon: {
    alignSelf: 'flex-end',
    padding: 20,
    backgroundColor: '#1B3E37',
    color: '#FFC100',
    borderRadius: 90,
    marginRight: 20,
  },
});
