import React, { useEffect, useState } from 'react'
import { Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const Formulario = ({modalVisible, cerrarModal, pacientes, setPacientes, paciente: pacienteObj, setPaciente: setPacienteApp}) => {
    const [paciente, setPaciente] = useState('')
    const [id, setId] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState(new Date())
    const [sintomas, setSintomas] = useState('')

    useEffect(() => {
        if(Object.keys(pacienteObj).length > 0){
            setId(pacienteObj.id)
            setPaciente(pacienteObj.paciente)
            setPropietario(pacienteObj.propietario)
            setEmail(pacienteObj.email)
            setTelefono(pacienteObj.telefono)
            setFecha(pacienteObj.fecha)
            setSintomas(pacienteObj.sintomas)
        }
    }, [pacienteObj])
    
    const hanldeCita = () => {
        if([paciente, propietario, email, fecha, sintomas].includes('')){
            Alert.alert(
                'Error',
                'Todos los campos son Obligatorios'
            )
            return
        }

        const NuevoPaciente = {
            paciente,
            propietario,
            email,
            telefono,
            fecha,
            sintomas
        }

        if(id){
            NuevoPaciente.id = id
            
            const pacienteActualizados = pacientes.map(pacienteState => pacienteState.id === NuevoPaciente.id ? NuevoPaciente : pacienteState)

            setPacientes(pacienteActualizados)
            setPacienteApp({})
        }else{
            NuevoPaciente.id = Date.now()
            setPacientes([...pacientes,NuevoPaciente])
        }

        cerrarModal()

        setId('')
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setFecha(new Date())
        setSintomas('')
    }

    return (
        <Modal animationType='slide' visible={modalVisible}>
            <SafeAreaView style={styles.container}> 
                <ScrollView>
                    <Text style={styles.titulo}> {pacienteObj.id ? 'Editar' : 'Nueva'} {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <Pressable style={styles.cancelar} onPress={() => {
                        cerrarModal()
                        setPacienteApp({})
                        setId('')
                        setPaciente('')
                        setPropietario('')
                        setEmail('')
                        setTelefono('')
                        setFecha(new Date())
                        setSintomas('')
                        }}>
                        <Text style={styles.btnCancelarText}>Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Nombre del Paciente' 
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
                            />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Nombre del Propietario' 
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}
                            />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Email' 
                            placeholderTextColor={'#666'}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                            />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono Propietario</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Teléfono' 
                            placeholderTextColor={'#666'}
                            keyboardType='phone-pad'
                            value={telefono}
                            onChangeText={setTelefono}
                            maxLength={10}
                            />
                    </View>
                    <View style={styles.campoFecha}>
                        <Text style={styles.label}>Fecha Alta</Text>
                        <View style={styles.fechaContenedor}>
                            <DateTimePicker value={fecha} onDateChange={(date) => setFecha(date)} />
                        </View>
                        
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas del paciente</Text>
                        <TextInput 
                            style={[styles.input, styles.sintomasInput]}
                            placeholder='Síntomas' 
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4}
                            />
                    </View>

                    <Pressable style={styles.btnNuevaCita} onPress={hanldeCita}>
                        <Text style={styles.btnNuevaCitaText}>{pacienteObj.id ? 'Editar' : 'Agregar'} Paciente</Text>
                    </Pressable>

                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#19222B',
        flex: 1,
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
    cancelar: {
        marginVertical: 30,
        backgroundColor: '#B84357',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
    },
    btnCancelarText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    label: {
        color: '#BD9240',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    }, 
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    sintomasInput: {
        height: 100
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
    },
    fechaContenedor: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'flex-end'
    }, 
    campoFecha: {
        marginTop: 10,
        marginHorizontal: 126,
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: '#B84357',
        paddingVertical: 10,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnNuevaCitaText: {
        textAlign: 'center',
        color: '#FBA',
        textTransform: 'uppercase',
        fontWeight: 800,
        fontSize: 16,

    }
})

export default Formulario
