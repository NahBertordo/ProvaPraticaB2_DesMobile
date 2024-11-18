// screens/Cadastro.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Pressable, Image, Text, StyleSheet } from 'react-native';
import { supabase } from '../lib/supabase';

export default function TelaCadastro({ navigation }: { navigation: any }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    async function signUpWithEmail() {
        setLoading(true)
        const {
          data: { session },
          error,
        } = await supabase.auth.signUp({
          email: email,
          password: password,
        })
    
        if (error){
            Alert.alert(error.message)
        } else if(session){
            Alert.alert('Usuario Cadastrado! Por favor, Faça o login!', '',[
                { text: 'OK', onPress: () => navigation.navigate('TelaLogin') }
            ])
        } else{
            if (!session) Alert.alert('Por favor, verifique sua caixa de entrada para a verificação de email!')
        }
        
        setLoading(false)
      }

    return (
        <View style={styles.container}>
      <Image
        source={{ uri: 'https://uvv.br/wp-content/themes/core/dist/images/logo.png' }}
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="Email" onChangeText={(text) => setEmail(text)}
          value={email}/>
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry onChangeText={(text) => setPassword(text)}
          value={password} />
      <Pressable style={styles.bnt} disabled={loading} onPress={() => signUpWithEmail()}>
      <Text style={styles.textButton}>Cadastrar</Text>
      </Pressable>
      <Pressable style={styles.bnt} onPress={() => navigation.navigate('TelaLogin')}>
      <Text style={styles.textButton}>Voltar ao Login</Text>
      </Pressable>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    logo: {
      width: 140,
      height: 50,
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      color: '#555',
      borderRadius: '4px',
    },
    bnt:{
      color: '#fff',
      backgroundColor: '#3276b1',
      borderColor: '#285e8e',
      width: '80%',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    textButton: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });