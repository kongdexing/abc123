/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var AltContainer = require('alt/AltNativeContainer');
var TabStore = require('./src/store/tab.js');
var TabActions = require('./src/actions/tab.js');
var TabContainer = require('./src/components/tab/container.js');


var tabbartest = React.createClass({
  render: function() {
    return (
      <AltContainer
          store={TabStore}
          actions={TabActions}>
          <TabContainer />
      </AltContainer>
    );
  }
});


AppRegistry.registerComponent('tabbartest', () => tabbartest);
