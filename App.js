import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

class App extends React.Component {
  state = {
    showContacts: false,
  };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  render() {
    return (
      <SafeAreaView style={styles.noticicationBar}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.toggleContacts()}
          >
            <Text>Show Contacts</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  noticicationBar: {
    flex: 1,
    backgroundColor: "#C4C8CC",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#C4C8CC",
    padding: 10,
    margin: 10,
  },
});
