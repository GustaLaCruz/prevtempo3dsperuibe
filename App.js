import { React } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.bloco}>
        <Text style={styles.titulo}>Wettervorhersage</Text>
        </View>

        <View style={styles.blocoConteudo}>
        <Text style={styles.textoLabel}>Geben Sie Ihre Stadt ein
:</Text>
        <TextInput
          placeholder='deine Stadt ...'
          style={styles.input}
        />
        </View>

        <View>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Suche</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bloco:{
    alignItems:'center',
    marginBottom:20,
    marginTop:20
  },
  blocoConteudo:{
    
  },
  titulo:{
    fontSize:30
  },
  textoLabel:{
    fontSize:20,
    marginLeft:'10%'
  },
  input:{
    marginLeft:'10%',
    borderBottomWidth:2,
    marginRight:'10%',
    fontSize:20
    
  },
  botao:{
    marginLeft:'10%',
    marginRight:'10%',
    marginTop:'10%',
    backgroundColor:'#DF330E'
  },
  textoBotao:{
    fontSize:20,
    textAlign:'center'
  },
});
