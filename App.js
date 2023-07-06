import { useState } from 'react';
import { Alert, FlatList, Modal, SafeAreaView } from 'react-native';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const [modalPaciente, setModalPaciente] = useState(false)

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
    setPaciente(pacienteEditar[0])
  }

  const pacienteEliminar = id => {
    Alert.alert(
      'Estas seguro de eliminar este Registro?',
      'Si eliminas este registro no se podrá recuparar',
      [
        {text: 'Cancelar'},
        {text: 'Eliminar', onPress: () => {
          const pacienteActualizados = pacientes.filter(pacientesState => pacientesState.id !== id)

          setPacientes(pacienteActualizados)
        }}
      ]
    )
  }

  const cerrarModal = () => {
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.titulo}>Administrador de Citas {''}
        <Text style={styles.tituloBold} >Veterinaria</Text>
      </Text>

      <Pressable style={styles.btnNuevaCita} onPress={() => setModalVisible(true)} >
        <Text style={styles.btnNuevaCitaText}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? <Text style={styles.noPaciente}>No hay Pacientes Agregados</Text> 
        : <FlatList style={styles.listado} data={pacientes} 
          keyExtractor={(item) => item.id} 
          renderItem={({item}) => {
            return(
              <Paciente item={item}
                setModalVisible={setModalVisible}
                setPaciente={setPaciente}
                pacienteEditar={pacienteEditar}
                pacienteEliminar={pacienteEliminar}
                setModalPaciente={setModalPaciente}
              />
              )
          }}/>
      }

      {modalVisible && (
        <Formulario 
        cerrarModal={cerrarModal}
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente} 
        setPaciente={setPaciente}
        />
      )}

      

        <Modal visible={modalPaciente} animationType='fade'>
          <InformacionPaciente 
            paciente={paciente}
            setPaciente={setPaciente}
            setModalPaciente={setModalPaciente}
            />
        </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD6CC',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    color: '#374151',
    fontWeight: '600' 
  },
  tituloBold: {
    fontWeight: '900',
    color: '#BD9240',
  },
  btnNuevaCita:{
    backgroundColor: '#B84357',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20
  },
  btnNuevaCitaText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 17,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPaciente: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24, 
    fontWeight: 600
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
});
