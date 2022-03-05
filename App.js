import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {webViewUrl: 'https://www.myprotein.com/'};
  }
  _onMessage = event => {
    console.log('_onMessage', JSON.parse(event.nativeEvent.data));
    const res = JSON.parse(event.nativeEvent.data);
    if (res.message === 'ok') {
      alert('button clicked ');
    }
  };
  render() {
    const jsCode = `document.querySelector('div.westendHeader_container').style.backgroundColor = 'red';
    document.querySelector('a.athenaBasket_imageLink').style.backgroundColor = 'green';
    document.querySelector('a.presentationalPaymentTypes_paymentTypeLink[3]').click();
    `;
    return (
      <View style={styles.container}>
        <WebView
          ref={ref => {
            this.webview = ref;
          }}
          source={{uri: this.state.webViewUrl}}
          originWhitelist={['*']}
          javaScriptEnabledAndroid={true}
          javaScriptEnabled={true}
          injectedJavaScript={jsCode}
          onMessage={this._onMessage}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
