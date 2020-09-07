// src/components/MQTTDemoApp.tsx

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  //ScrollView,
  //SafeAreaView,
  //StatusBar,
} from 'react-native';

import AppHeader from './AppHeader';
//import ListItem from './ListItem';

// component
const MQTTDemoApp = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.header, styles.one]}>
        <AppHeader
          style={[styles.row, styles.header, styles.one]}
          title={'React Native MQTT'}
          iconUri={'https://reactnative.dev/docs/assets/p_cat1.png'}
        />
      </View>
      <View style={[styles.row, styles.main, styles.four]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
        {/* <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> */}

        {/* <FlatList
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
        /> */}
      </View>
      <View style={[styles.row, styles.footer, styles.one]}>
        {/* <Text>{'FOOTER'}</Text> */}
        <View style={styles.row}>
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.box3]} />
          <View style={[styles.box, styles.two]} />
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.two]} />
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.box3]} />
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.two]} />
          <View style={[styles.box, styles.box3]} />
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box]} />
          <View style={[styles.box, styles.box3]} />
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box]} />
        </View>

        <View style={styles.row}>
          <View style={[styles.box]} />
        </View>
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  // basics layout style
  container: {
    flex: 1,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', // Evenly space off children across the container's main axis, distributing the remaining space between the children.
    marginBottom: 5,
  },

  box: {
    flex: 1,
    height: 50,
    width: 50,
    backgroundColor: '#333',
  },

  box2: {
    backgroundColor: 'green',
  },

  box3: {
    backgroundColor: 'orange',
  },

  // 'flex' will define how your items are going to “fill” over the available space along your main axis.
  one: {
    flex: 1,
  },
  two: {
    flex: 2,
  },
  four: {
    flex: 4,
  },

  //! specific styles

  header: {
    //backgroundColor: 'darkslateblue',
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

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 70,
  },
});

export default MQTTDemoApp;
