import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, NavigationScreenProps} from 'react-navigation';
import React, {ReactElement} from 'react';
import {Button} from 'react-native';

interface Screen {
  navigation: NavigationScreenProps;
}
class ProfileScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = {title: 'Profile'};

  public render(): ReactElement {
    // const name = state.params.name;
    return (
      <Button
        title={'Go to tss Welcome2'}
        onPress={(): void => {
          this.props.navigation.navigate('Home', {
            name: 'Jane',
          });
        }}
      />
    );
  }
}

class HomeScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = {title: 'Home'};

  public render(): ReactElement {
    // const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's Profile"
        onPress={(): void => {
          this.props.navigation.navigate('Profile', {name: 'Carlos Ruiz'});
        }}
      />
    );
  }

  public componentDidMount(): void {
    this.props.navigation.openDrawer();
  }
}

const MainNavigator = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
  },
  {
    navigationOptions: {
      drawerLockMode: 'unlocked',
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
