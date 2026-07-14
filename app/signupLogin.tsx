import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'

export default function signupLogin(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (!email || !password){
             Alert.alert('Error', 'Please fill out all fields');
            return;
        }
         Alert.alert('Form Submitted', `Email: ${email}`);
         // Perform your API POST request here
    };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <Text style={styles.subText}>Enter your email to sign up for this app</Text>
      <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address" // Optimizes keyboard layout
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)} // Syncs typing with state
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true} // Hides text for passwords
            value={password}
            onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color={'white'} />
      </View>
      <Button title="Continue with Google" />
      <Button title="Continue with Apple" />
      <Text style={styles.subText}>By clicking submit you agree to our Terms of Service and Privacy Policy</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 20, //seperates sub text from input fields
  },
   inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Prevents touching the physical edge of the phone
    width: '100%',         // Ensures container fills the screen width
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 15, 
    fontSize: 16,
    width: '100%',  
  },
  buttonContainer: { 
    marginTop: 10,
    backgroundColor: '#000000',
    width: '90%',   
    borderRadius: 8, 
  },
})
