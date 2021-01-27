import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component {
  constructor() {
    super();
    this.state={
      hasCameraPermissions:null,
      scanned:false,
      scannedData:'',
      buttonState:normal,
    }
  }


  getCameraPermissions= async() => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);    
    }
   this.setState =



    render() {
      return (
        <View style={ styles.container }>
          <Text style={styles.displayText}> DummyQrCodeOutput </Text>
          <TouchableOpacity style={styles.scanButton}> </TouchableOpacity>
          <Text>Issue or Return</Text>
          <TouchableOpacity>
            <Text>
              ScanQrcode
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
     container: { 
       flex: 1,
        justifyContent: 'center',
         alignItems: 'center' },
          displayText:{ 
            fontSize: 15,
             textDecorationLine:
              'underline' },
               scanButton:{
                  backgroundColor: '#2196F3',
                   padding: 10,
                    margin: 10 },
                     buttonText:
                     { fontSize: 20, }
                     });