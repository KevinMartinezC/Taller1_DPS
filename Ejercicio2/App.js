
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import react, { useState } from 'react';
import React, {useEffect} from 'react';
import colors from './src/utils/colors';
import Form from './src/components/form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';


export default function App() {
  const [CafeSize, setcafesSize] = useState(null);
  const[productCant,setProductCant] = useState(null);
  const [CafeType, setCafesType] = useState(null);
  const [PaymentType, setPayment] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
useEffect(() => {
if (CafeSize && CafeType && PaymentType && productCant>0) calculate();
else reset();
}, [CafeSize, CafeType, PaymentType, productCant]); 
const calculate = () => {
reset();
if (!CafeSize) {
  setErrorMessage('Escoja un tamaño para su Cafe');
  } else if (!CafeType) {
  setErrorMessage('Escoja un tipo de Cafe');
  } else if (!PaymentType) {
  setErrorMessage('Escoja un metodo de pago');
  
  } else if(!productCant){
    setErrorMessage('Ingrese la cantidad de café deseada')
  }else {
  const discount = (CafeSize + CafeType) * PaymentType;
  const total2 = ((CafeSize+ CafeType) - discount)* productCant;
  setTotal({
  totalPayable: total2.toFixed(2),
  });
  }
  };
  const reset = () => {
  setErrorMessage('');
  setTotal(null);
  };
  return (
    <>
    <StatusBar barStyle="light-content"/>
  <SafeAreaView style={styles.Header}>
    <Text style={styles.HeadApp}>StarBosco App</Text>
    <Form
      setcafesSize={setcafesSize}
      setCafesType={setCafesType}
      setPayment={setPayment}
      setProductCant={setProductCant}/>
  </SafeAreaView>
  <Result
    productCant={productCant}
    CafeSize={CafeSize}
    CafeType={CafeType}
    PaymentType={PaymentType}
    total={total}
    errorMessage={errorMessage}
/>
  <Footer></Footer>
    
</>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor:colors.PRIMARY_COLOR,
    height:300,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center',
  },
  HeadApp:{
    fontSize:30,
    fontWeight:'bold',
    color:'#fff',
    marginTop:55,
    zIndex:1
  },
});
