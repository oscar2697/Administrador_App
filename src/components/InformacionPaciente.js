import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { formatearFecha } from '../helpers'

const InformacionPaciente = ({paciente, setPaciente, setModalPaciente}) => {
    return (
        <SafeAreaView style={styles.contenedor}>
            <Text style={styles.titulo}>Informacion del {''}
                <Text style={styles.tituloBold}>Paciente</Text>
            </Text>
            

            <View>
                <Pressable style={styles.cerrar} onLongPress={() => {
                    setModalPaciente(false)
                    setPaciente({})
                    }}>
                    <Text style={styles.btnCerrarText}>Cerrar</Text>
                </Pressable>
            </View>

            <View style={styles.contenido}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre: </Text>
                    <Text style={styles.valor}> {paciente.paciente} </Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Propietario: </Text>
                    <Text style={styles.valor}> {paciente.propietario} </Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Email: </Text>
                    <Text style={styles.valor}> {paciente.email} </Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono: </Text>
                    <Text style={styles.valor}> {paciente.telefono} </Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha: </Text>
                    <Text style={styles.valor}> {formatearFecha(paciente.fecha)} </Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Síntomas: </Text>
                    <Text style={styles.valor}> {paciente.sintomas} </Text>
                </View>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#FEF9E0',
        flex: 1
    },
    titulo: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#BD9240'
    }, 
    tituloBold: {
        fontWeight: '900',
    },
    cerrar: {
        marginVertical: 30,
        backgroundColor: '#B84357',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
    },
    btnCerrarText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    contenido: {
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    campo: {
        marginBottom: 10
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        fontSize: 12
    },
    valor: {
        fontWeight: '700',
        fontSize: 20,
        color: '#334155'
    }
})

export default InformacionPaciente
