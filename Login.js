/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      placeName: '',
      places: []
    }
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
  }

  placeRemoveHandler = (index) => {
    this.props.del(index)
  }

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });
  }

  placesOutput = () => {
    return (
      <FlatList style={styles.listContainer}
        data={this.props.places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => (
          <ListItem
            placeName={info.item.value}
            onPress={()=>{
              console.log('listitem_index',info.item.key);
              this.placeRemoveHandler(info.item.key)
            }}
          />
        )}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Seach Places"
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          ></TextInput>
          <Button title='Add'
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {  
    add: (name) => {
      dispatch(addPlace(name))
    },
    del: (index) => {
      dispatch(delPlace(index))
    }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App)