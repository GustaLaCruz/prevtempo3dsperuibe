import React from 'react';
import { Text, StyleSheet} from 'react-native';

export default function Tempo() {
 return (
     <>
        <Text style={styles.texto}>Min:</Text>
        <Text style={styles.texto}>Max: </Text>
        <Text style={styles.texto}>Bezeichnung:</Text>
   </>
  );
}

const styles = StyleSheet.create({
    texto:{
        fontSize:20,
        marginLeft:'10%',
        marginTop:10
    }

});