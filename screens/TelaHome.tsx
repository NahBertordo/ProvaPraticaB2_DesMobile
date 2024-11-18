// screens/Grupos.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Button, Pressable, Image, StyleSheet } from 'react-native';
import { supabase } from '../lib/supabase';


export default function TelaHome({ navigation }: { navigation: any }) {
    return(
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://uvv.br/wp-content/themes/core/dist/images/logo.png' }}
            style={styles.logo}
          />
          <View style={styles.especialidade}>
          <Text style={styles.nomeEspecialidade}>Ciêcia da Computação</Text>
          <Text style={styles.nomeEspecialidade}>Arquitetura e Urbanismo</Text>
          <Text style={styles.nomeEspecialidade}>Medicina </Text>
          <Text style={styles.nomeEspecialidade}>Engenharia da Computação</Text>
          <Text style={styles.nomeEspecialidade}>Odontologia</Text>
          <Text style={styles.nomeEspecialidade}>Nutrição</Text>
          <Text style={styles.nomeEspecialidade}>Educação Física</Text>
          <Text style={styles.nomeEspecialidade}>Psicologia</Text>
          </View>
          <Pressable style={styles.bnt} onPress={() => navigation.navigate('TelaLogin')}>
            <Text style={styles.textButton}>Sair</Text>
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
      nomeEspecialidade: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3276b1',
      },
      especialidade: {
        padding: 25,
      },
    });