/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import React from 'react-native';
import CardListElement from './CardListElement';
import Styles from './CardListStyles.js';
import CardPropTypes from '../../constants/CardPropTypes';

const {
  PropTypes,
  View,
  ListView,
} = React;

/**
 * The CardList component is responsible for displaying a scrollable list of an
 * array of flashcards.
 */
const CardList = React.createClass({
  displayName: 'CardList',

  // add flashcards to the datasource of ListView
  propTypes: {
    flashcards: PropTypes.arrayOf(CardPropTypes.flashcard),
  },

  getInitialState() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.frontText !== r2.frontText});
    return {
      dataSource: ds.cloneWithRows(this.props.flashcards),
    };
  },

  renderRow(rowData = CardPropTypes.flashcard) {
    return (
      <CardListElement flashcard={rowData}/>
    );
  },

  render() {
    return (
      <View style={Styles.listViewHolder}>
        <ListView
          style={Styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  },

});

export default CardList;
