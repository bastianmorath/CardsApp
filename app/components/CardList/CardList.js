/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
// TODO: fix all eslint errors in this file.
// TODO: format JSX correctly
// TODO: order of functions in a react component.
// TODO: Rename Styles.js file to something like "CardListStyles"
// TODO: fix propTypes: this page of the documentation contains all the possible value for PropType: https://facebook.github.io/react/docs/reusable-components.htmlÎ
import _ from 'lodash';
import React from 'react-native';
import CardListCell from './CardListCell';
import Styles from './Styles.js';

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
     // TODO: the function rowHasChanged is by ListView to determin, if the data of a row hasChanged.
     // r1 and r2 are data objects from the this.props.flashcards array. So we need to compare properties not the object.
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
