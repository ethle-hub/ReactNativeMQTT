// src/components/MQTTDemoApp.tsx

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  //ScrollView,
  //SafeAreaView,
  //StatusBar,
} from 'react-native';

import AppHeader from './AppHeader';
import ListItem from './ListItem';

// component
const MQTTDemoApp = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'Milk',
    },
    {
      id: 2,
      text: 'Eggs',
    },
    {
      id: 3,
      text: 'Bread',
    },
    {
      id: 4,
      text: 'Juice',
    },
  ]);

  const [checkedItems, checkedItemChange] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppHeader />
      </View>
      <View style={[styles.main, styles.threeQuarterHeight]}>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem
              item={item}
              // deleteItem={deleteItem}
              // editItem={editItem}
              // isEditing={editStatus}
              // editItemDetail={editItemDetail}
              // saveEditItem={saveEditItem}
              // handleEditChange={handleEditChange}
              // itemChecked={itemChecked}
              checkedItems={checkedItems}
            />
          )}
        />
      </View>
      <View style={[styles.footer, styles.quarterHeight]}>
        <Text>{'FOOTER'}</Text>
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    // margin: 5,
  },
  header: {
    backgroundColor: 'darkslateblue',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  main: {
    backgroundColor: 'skyblue',
    borderColor: 'blue',
    borderWidth: 5,
  },
  footer: {
    backgroundColor: 'steelblue',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  threeQuarterHeight: {
    flex: 3,
  },
  halfHeight: {
    flex: 2,
  },
  quarterHeight: {
    flex: 1,
  },
});

export default MQTTDemoApp;
