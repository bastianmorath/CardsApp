/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import React from 'react-native';
import CardListCell from './CardListCell';
import Styles from './CardListStyles.js';

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
    flashcards: PropTypes.array,
  },

  getInitialState() {
       // TODO: the function rowHasChanged is by ListView to determin, if the data of a row hasChanged.
       // r1 and r2 are data objects from the this.props.flashcards array. So we need to compare properties not the object.
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.fronttext !== r2.fronttext});
    return {
      dataSource: ds.cloneWithRows(this.props.flashcards),
    };
  },

  renderRow(rowData) {
    return (
      <CardListCell flashcard={rowData}/>
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
