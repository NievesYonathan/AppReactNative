import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid } from "react-native";
import { RoundedButton } from '../../components/RoundedButton';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/chef.jpg')}
        style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>
      
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>

        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/email.png')}
            style={styles.formIcon}
          />
          <TextInput 
            style={styles.formTextInput} 
            placeholder="Correo Electronico"
            keyboardType='email-address'
          />
        </View>

        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/password.png')}
            style={styles.formIcon}
          />
          <TextInput 
            style={styles.formTextInput} 
            placeholder="Contraseña"
            keyboardType='default'
            secureTextEntry={true}
          />
        </View>

        <View style={{marginTop: 30}}>
          <RoundedButton text='ENTRAR' onPress={()=> ToastAndroid.show('HOLA', ToastAndroid.SHORT)}/>
        </View>

        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <Text style={styles.formRegisterText}>Regístrate Aquí</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    bottom:'30%',
  },
  form:{
    width:'100%',
    height:'40%',
    backgroundColor:'white',
    position:'absolute',
    bottom:0,
    borderTopLeftRadius:40,
    borderTopRightRadius:40
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    textAlign: 'center'
  },
  formText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    left: 10,
  },
  formInput: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 10,
    left: 10
  },
  formIcon: {
    position: 'absolute',
    left: 10,
    width: 20,
    height: 20,
  },
  formTextInput: {
    flex: 1,
    paddingLeft: 5,
    left: 10
  },
  formRegister: {
    top: 10,
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    marginBottom: 10,
    left: 10
  },
  formRegisterText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5
  }
});