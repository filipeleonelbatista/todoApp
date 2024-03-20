import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from '../assets/logo.png'
import clipboard from '../assets/clipboard.png'
import trash from '../assets/trash.png'
import plus from '../assets/plus.png'
import { CheckBox } from "react-native-btr";

import { styles } from './styles'
import { useMemo, useState } from 'react';

interface TodoList {
  id: number;
  status: boolean;
  description: string;
}

export default function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');
  const [list, setList] = useState<TodoList[]>([]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const completedCount = useMemo(() => {
    return list.filter(item => item.status === true).length;
  }, [list]);

  const incompleteCount = useMemo(() => {
    return list.filter(item => item.status === false).length;
  }, [list]);

  const handleAddItem = () => {
    if (text != '') {
      setList((prevState) => [{ id: prevState.length + 1, status: false, description: text }, ...prevState])
    }
  }

  const handleToggleStatus = (id: number) => {
    setList(prevList =>
      prevList.map(item =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  }

  const handleDelete = (id: number) => {
    Alert.alert(
      'Excluir Tarefa',
      'Tem certeza que deseja excluir este item?',
      [
        { text: 'Não', onPress: () => console.log('Exclusão cancelada') },
        {
          text: 'Sim', onPress: () => {
            setList(prevList => prevList.filter(item => item.id !== id));
          }
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      <View style={styles.content}>
        <View style={styles.inputGroup}>
          <TextInput
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={(text) => setText(text)}
            value={text}
            placeholderTextColor={'#808080'}
            style={[styles.input, isFocused ? { borderWidth: 1 } : { borderWidth: 0 }]}
            placeholder="Adicione uma nova tarefa"
          />
          <TouchableOpacity style={styles.button} onPress={handleAddItem}>
            <Image source={plus} />
          </TouchableOpacity>
        </View>



        <FlatList
          data={list}
          ListHeaderComponent={() => (
            <>
              <View style={styles.countersContent}>
                <View style={styles.counters}>
                  <Text style={styles.label}>Criadas</Text>
                  <Text style={styles.indicator}>{incompleteCount}</Text>
                </View>
                <View style={styles.counters}>
                  <Text style={[styles.label, { color: "#8284FA" }]}>Concluídas</Text>
                  <Text style={styles.indicator}>{completedCount}</Text>
                </View>
              </View>
              {
                list.length === 0 && <View style={styles.separator} />
              }

            </>

          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyComponent}>
              <Image style={styles.emptyImage} source={clipboard} />
              <View style={styles.emptyText}>
                <Text style={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.emptySubTitle}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            </View>
          )}
          contentContainerStyle={{
            paddingHorizontal: 24,
          }}
          ItemSeparatorComponent={() => <View style={{ height: 8, width: 8 }} />}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.itemContainer}>
              <CheckBox
                checked={item.status}
                color={item.status ? '#585ABD' : '#1E6F9F'}
                borderRadius={12}
                onPress={() => handleToggleStatus(item.id)}
              />
              <Text style={[styles.itemText, item.status ? { textDecorationLine: 'line-through', color: "#808080" } : {}]}>{item.description}</Text>
              <TouchableOpacity style={styles.itemButton}
                onPress={() => handleDelete(item.id)}>
                <Image source={trash} />
              </TouchableOpacity>
            </View>
          )}
        />

      </View>
    </View>
  );
}


