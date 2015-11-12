/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import _ from 'lodash';
import React from 'react-native';
import CardListCell from './CardListCell'
import Styles from './Styles.js'

const {
  PropTypes,
  View,
  Text,
  ListView,
} = React;

/**
 * The CardList component is responsible for displaying a scrollable list of an
 * array of flashcards.
 */
const CardList = React.createClass({
displayName: 'CardList',

  // add flashcards to the datasource of ListView
   getInitialState: function() {
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     return {
       dataSource: ds.cloneWithRows(this.props.flashcards),
     };
   },

  propTypes: {
    flashcards: PropTypes.array
  },

  render() {
    const count = _.size(this.props.flashcards);
    return (
      <View >
      <ListView style= {Styles.listview}
      dataSource ={this.state.dataSource}
      renderRow= {this.renderRow}
      />
      </View>
    );
  },

  renderRow(rowData){
    return(
      <CardListCell flashcard={rowData}/>
    )
  }
});

export default CardList;
