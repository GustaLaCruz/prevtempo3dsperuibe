import  React, {useState}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';
import Tempo from './components/Tempo';
/*import Api from './components/Api';*/

export default function App() {
 /* const [dados, setDados] = useState();
  const [cidade, setCidade] = useState();

  async function buscaCep(){
    const resposta = await Api.get('weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=ddce6cfe&city_name=Peruibe,SP');
  }
    setDados(resposta.data.forecast[0]);
    console.warn(dados);*/
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
          onPress={buscaCep}
        />
        </View>

        <View>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Suche</Text>
            </TouchableOpacity>
        </View>
        <Tempo data={dados}/>
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
    marginLeft:'20%',
    marginRight:'20%',
    marginTop:'10%',
    backgroundColor:'#DF330E',
    padding:10,
    
  },
  textoBotao:{
    fontSize:20,
    textAlign:'center',
    color:'#ffff'
  },
});
