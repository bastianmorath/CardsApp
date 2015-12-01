/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import React from 'react-native';
import CardListElement from './CardListElement';
import Styles from './CardListStyles.js';
import CustomPropTypes from '../../constants/CustomPropTypes';

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

  propTypes: {
    flashcards: PropTypes.arrayOf(CustomPropTypes.flashcard).isRequired,
  },

  getInitialState() {
    return {
      dataSource: this._getListViewDataSource(this.props.flashcards),
    };
  },

  componentWillReceiveProps(nextProps: Object) {
    if (nextProps) {
      this.setState({
        dataSource: this._getListViewDataSource(nextProps.flashcards),
      });
    }
  },

  /**
   * Helper function that creates the ListView.DataSource object from the passed flashcard array.
   */
  _getListViewDataSource(flashcards: Array<Object>) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.frontText !== r2.frontText});
    return ds.cloneWithRows(flashcards);
  },

  _renderRow(rowData: Object) {
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
          renderRow={this._renderRow}
        />
      </View>
    );
  },

});

export default CardList;
