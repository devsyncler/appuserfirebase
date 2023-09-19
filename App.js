import React, { useEffect, useState} from "react";
import { View, Text} from 'react-native'

import firebase from './src/firebaseConnection'

export default function App(){
  const [nome, setNome] = useState('Carregando...');
  const [idade, setIdade] = useState('');
  
  useEffect(() =>{

    async function dados(){

      await firebase.database().ref('usuarios/2').on('value',(snapshot)=>{
        setNome(snapshot.val().nome);
        setIdade(snapshot.val().idade);
      })
    }

    dados();

  }, [])
  
  
  
  
  return(
    <View>
      <Text>Ola {nome}</Text>
      <Text>idade:{idade}</Text>
    </View>
  )
}
