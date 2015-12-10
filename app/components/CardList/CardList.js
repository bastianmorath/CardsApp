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
import Button from '../CustomComponents/CardButton.js';

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
      isDeleting: false,
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

  _onEditButtonPress() {
    this.setState({isDeleting: !this.state.isDeleting});
  },

  _renderRow(rowData: Object) {
    return (
      <CardListElement flashcard={rowData}/>
    );
  },

  render() {
    const buttonType = this.state.isDeleting ? 'done' : 'delete';
    const style = this.state.isDeleting ? Styles.listViewHolderDeleteMode : Styles.listViewHolderNonDeleteMode;
    return (
      <View style={style}>
        <ListView
          style={Styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
        <Button
          style={Styles.editButton}
          onPress={this._onEditButtonPress}
          buttonType={buttonType}
        />
      </View>
    );
  },

});

export default CardList;
