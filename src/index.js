import React from 'react';
import {FlatList, View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  const addEntry = () => {
    alert('Olá tudo bem?');
  };

  return (
    <View style={{padding: 20}}>
      <Text style={styles.title}>Saldo: $2.102,45</Text>

      <Button onPress={addEntry} title="Adicionar" />

      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={[
          {key: 'Alimentação: $201'},
          {key: 'Combustível: $12'},
          {key: 'Aluguel: $120'},
          {key: 'Lazer: $250'},
          {key: 'Outros: $1200'},
        ]}
        renderItem={({item}) => <Text style={styles.entry}>- {item.key}</Text>}
      />
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10'},
          {key: 'Supermercado Isadora: $190'},
          {key: 'Posto Ipiranga: $190'},
        ]}
        renderItem={({item}) => <Text style={styles.entry}>- {item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  entry: {
    fontSize: 14,
  },
});

export default App;
