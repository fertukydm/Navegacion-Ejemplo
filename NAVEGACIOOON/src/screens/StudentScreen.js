import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import StudentCard from '../components/StudentCard';

export default function StudentScreen({ navigation }) {
  const studentInfo = {
    name: 'Juan Pérez',
    age: 21,
    image: require('../assets/student.jpg'), // Imagen local
  };

  return (
    <View style={styles.container}>
      <StudentCard name={studentInfo.name} age={studentInfo.age} image={studentInfo.image} />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
});
