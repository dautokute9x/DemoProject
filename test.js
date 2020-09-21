import React from 'react';
import {View, Text} from 'react-native';

// eslint-disable-next-line no-undef
class App4 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  updateState = (props) => {
    this.setState({
      name: props,
    });
  };

  render() {
    const {updateState} = this.state;
    const {name} = this.props;
    return (
      <View>
        <Text onPress={updateState(name)}>{name}</Text>
      </View>
    );
  }
}

export default App4;
