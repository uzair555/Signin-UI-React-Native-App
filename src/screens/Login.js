import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { Input, SocialIcon, Text, Image } from 'react-native-elements';

class Login extends Component {
  componentDidMount() {
    console.log(this.props.navigation);
  }
  render() {
    return (
      <View style={styles.Container}>
        <View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/images/Logo.png')}
              style={styles.img}
            />
          </View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 140 }}>
            Notify
          </Text>
        </View>
        <View style={{ marginLeft: 10, marginTop: 30 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 40 }}>
            Welcome Back{' '}
          </Text>
          <Text style={{ opacity: 0.6 }}>Sign in to continue</Text>
        </View>

        <View style={{ marginTop: 20, paddingLeft: 10 }}>
          <Input placeholder="Email" containerStyle={styles.inp} />
          <Input placeholder="Password" containerStyle={styles.inp} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                paddingTop: 10,
                color: 'white',
              }}>
              Sign in
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'right',
                marginTop: 10,
                marginRight: 40,
                opacity: 0.5,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 120,
            marginTop: 30,
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              width: 30,
              marginRight: 10,
            }}></View>
          <Text> Or</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              width: 30,
              marginLeft: 10,
            }}></View>
        </View>

        <View style={{ marginTop: 60 }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', marginLeft: 60 }}
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={{ opacity: 0.5 }}>Don't have an account? </Text>
            <Text style={{ color: '#1e90ff' }}>Create Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
  },
  imgContainer: {
    width: 100,
    height: 120,
    marginLeft: 125,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  btn: {
    backgroundColor: '#1e90ff',
    width: 300,
    borderRadius: 30,
    fontSize: 20,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    shadowColor: 'rgb(30, 144, 255)',
    shadowOpacity: 10,
    elevation: 8,
  },
  inp: {
    width: 320,
    height: 60,
    opacity: 0.5,
  },
});

export default Login;
