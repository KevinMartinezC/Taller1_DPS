import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import colors from "../utils/colors";

export default function Form(props) {
    const {setPayment, setcafesSize, setCafesType, setProductCant} = props;

    return ( 
    <View style={styles.viewForm}>

        <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => setcafesSize(value)}
            placeholder={{
                label:'Tamaño Cafes...',
                value:null,
            }}
            items={[
                {label: 'Short-8onz-$1', value: 1},
                {label: 'Tall-12onz-$1.50', value: 1.50},
                {label: 'Grande-16onz-$2', value:2}, 
            ]}/>

        <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => setCafesType(value)}
            placeholder={{
                label:'Tipo Cafes...',
                value:null,
            }}
            items={[
                {label: 'Mocha-$2', value: 2},
                {label: 'Te-Chai-$2.50', value: 2.50},
                {label: 'Americano-$1.50', value:1.50},
                {label: 'Frappe-$3', value:3}, 
            ]}/>

            
           

            <View style={{flex:2,flexDirection:"row",justifyContent:'space-between',padding:10}}>
    <View style={{flex:1,padding:10}}>
    <RNPickerSelect 
            style={pickerSelectStyles2}
            onValueChange={(value) => setPayment(value)}
            placeholder={{
                label:'Tipo de Pago...',
                value:null,
            }}
            items={[
                {label: 'Efectivo-15% descuento', value: 0.15},
                {label: 'Tarjeta Credito-5% descuento', value: 0.05}, 
            ]}/>

    </View>
    <View style={{flex:0.9}}/>
    
    <View style={{flex:1,padding:10}}>
    <TextInput
 placeholder="Cant"
 keyboardType="numeric"
 style={[styles.input,{width:80}]}
 onChange={(e) => setProductCant(e.nativeEvent.text)}
 />
    </View>
    </View>

    </View>

    
    );
}

const styles = StyleSheet.create({
    viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingBottom:50,
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 200,
    alignItems:'center',
    },
    viewInputs: {
    flexDirection: 'column',
    },
    input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
    },
    inputPercentage: {
    width: '40%',
    marginLeft: 5,
    },
   });
   const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginTop:5,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
    },
    inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    marginTop:5,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    },
    });

    const pickerSelectStyles2 = StyleSheet.create({
        inputAndroid: {
        fontSize: 16,
        width:125,
        borderWidth: 0.5,
        marginRight:"66%",
        borderColor: 'grey',
        borderRadius: 8,
        marginBottom:10,
        color: 'black',
        paddingRight: 20,
        backgroundColor: '#fff',
        },
        });

