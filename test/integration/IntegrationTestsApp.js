/**
* @author    ::  Bastian Morath and Lukas Reichart
* @copyright ::  Bastian Morath and Lukas Reichart
*
* App Component that allows the user to manually run the integration tests.
* @flow
*/

import React from 'react-native';
const {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 40,
    margin: 15,
  },
  row: {
    padding: 10,
  },
  testName: {
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#bbbbbb',
  },
});

// Keep this list in sync with CardsAppIntegrationTests.m
const TESTS = [
  require('./FlashCardLibraryTest'),
];

TESTS.forEach(
  (test) => AppRegistry.registerComponent(test.displayName, () => test)
);

// Modules required for integration tests
// require('LoggingTestModule');

const IntegrationTestsApp = React.createClass({
  getInitialState() {
    return {
      test: undefined,
    };
  },

  render() {
    if (this.state.test) {
      return (
        <ScrollView>
          <this.state.test />
        </ScrollView>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.row}>
        Click on a test to run it in this shell for easier debugging and
        development.  Run all tests in the testing environment with cmd+U in
        Xcode.
        </Text>
        <View style={styles.separator} />
        <ScrollView>
          {TESTS.map((test) => [
            <TouchableOpacity
              onPress={() => this.setState({test})}
              style={styles.row}>
                <Text style={styles.testName}>
                  {test.displayName}
                </Text>
            </TouchableOpacity>,
            <View style={styles.separator} />,
          ])}
        </ScrollView>
      </View>
    );
  },
});


AppRegistry.registerComponent('IntegrationTestsApp', () => IntegrationTestsApp);
