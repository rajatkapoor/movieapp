import {
  Navigation
} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('genreScreen', () => require("./genres/GenreScreen").default);
  Navigation.registerComponent('movieScreen', () => require("./movies/MovieScreen").default);
}