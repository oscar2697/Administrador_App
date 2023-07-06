import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { formatearFecha } from '../helpers'

const Paciente = ({item, setModalVisible, setPaciente, pacienteEditar, pacienteEliminar, setModalPaciente}) => {
    const {paciente, fecha, id} = item
    
    return (
        <Pressable onLongPress={() => {
            setModalPaciente(true)
            setPaciente(item)
            }}>
            <View style={styles.contenedor}>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.text}>{paciente}</Text>
                <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

                <View style={styles.contenedorBtn}>
                    <Pressable style={[styles.btn, styles.btnEditar]} onLongPress={() => {
                        setModalVisible(true)
                        pacienteEditar(id)
                        }}>
                        <Text style={styles.btnTexto}>Editar</Text>
                    </Pressable>
                    <Pressable style={[styles.btn, styles.btnEliminar]} onLongPress={() => pacienteEliminar(id)}>
                        <Text style={styles.btnTexto}>Eliminar</Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#FFFAF0',
        padding: 20,
        borderBottomColor: '#94a3B8',
        borderBottomWidth: 1
    },
    label: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10
    },
    text: {
        color: '#BD9240',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10,

    },
    fecha: {
        color: '#374151',
    },
    contenedorBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    btnEditar: {
        backgroundColor: '#F59E0B'
    },
    btnEliminar: {
        backgroundColor: '#EF4444'
    },
    btnTexto: {
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#FFF'
    }
})

export default Paciente
