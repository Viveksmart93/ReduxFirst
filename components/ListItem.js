import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
    return (
      <TouchableOpacity>
        <View style = { styles.listItem }>
          <Text style={{flex:1}}>{ props.placeName }</Text>
          <Button title='Delete' onPress={props.onPress} />
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    flexDirection:'row'
  }
});

export default ListItem;