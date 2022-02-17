import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Result(props) {
    const {CafeSize, CafeType, PaymentType, total,productCant, errorMessage} = props;
    return (
        <View style={styles.content}>
        {total && (
            <View style={styles.boxResult}>
            <Text style={styles.title}>RESUMEN</Text>
            <DataResult title="Cantidad de pedidos:" value={`${productCant} `}/>
            <DataResult title="Tamaño de cafe:" value={`${CafeSize} $`} />
            <DataResult title="Tipo de Cafe:" value={`${CafeType} $`} />
            <DataResult title="Descuento por tipo de pago" value={`${PaymentType}%`} />
            <DataResult
            title="Total a pagar:"
            value={`${total.totalPayable} $`}
            />
            </View>
            )}
            <View>
            <Text style={styles.error}>{errorMessage}</Text>
            </View>
            </View>
            );
            }
            function DataResult(props) {
                const {title, value} = props;
                return (
                <View style={styles.value}>
                <Text>{title}</Text>
                <Text>{value}</Text>
                </View>
                );
                }
                const styles = StyleSheet.create({
                content: {
                marginHorizontal: 40,
                },
                boxResult: {
                padding: 30,
                },
                title: {
                fontSize: 25,
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: 20,
                },
                value: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
                },
                error: {
                textAlign: 'center',
                color: '#f00',
                fontWeight: 'bold',
                fontSize: 20,
                },
                });

