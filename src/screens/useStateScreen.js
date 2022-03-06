import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

const useStateScreen = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View>
      <Header
        centerComponent={{text: 'useState Demo', style: {color: '#fff'}}}
      />

      <View style={styles.container}>
        <Text style={{marginBottom: 20}}>You have click {count} time(s)</Text>
        <Button onPress={() => setCount(count + 1)} title="click"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
export default useStateScreen;
