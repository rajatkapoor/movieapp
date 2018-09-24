import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

export default class GenreScreen extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      genres:[],
    }
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=93469fc311a4891561370aa4c6ad4232&language=en-US')
    .then((response)=> response.json())
    .then((response)=>{
      const genres = response.genres;
      this.setState({
        loading:false,
        genres: genres,
      })
    })
  }
  onPress(e) {
    console.log("onPress");
    console.log(e);


  }

  render() {
    return (
      <View>
        <Text>Please select a Genre in which you want movie recommendations</Text>
        
        <FlatList
          data={this.state.genres}
          renderItem={({item}) => <Button onPress={this.onPress.bind(this)} title={item.name}>{item.name}</Button>}
        />
      </View>
    )
  }
};
