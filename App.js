import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import contacts, { compareNames } from "./contacts";
import Row from "./Row";

class App extends React.Component {
  state = {
    showContacts: false,
    contacts,
  };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  sort = () => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }));
  };
  renderItem = (obj) => <Row {...obj.item} />;
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
          <TouchableOpacity style={styles.button} onPress={() => this.sort()}>
            <Text>Sort</Text>
          </TouchableOpacity>
          {this.state.showContacts ? (
            <FlatList data={this.state.contacts} renderItem={this.renderItem} />
          ) : null}
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
    //justifyContent: "center",
  },
  noticicationBar: {
    flex: 1,
    backgroundColor: "#C4C8CC",
  },
  button: {
    backgroundColor: "#C4C8CC",
    padding: 10,
    margin: 10,
  },
});
