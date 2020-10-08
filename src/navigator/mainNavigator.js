import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings132568Navigator from '../features/Settings132568/navigator';
import Settings132560Navigator from '../features/Settings132560/navigator';
import UserProfile132558Navigator from '../features/UserProfile132558/navigator';
import BlankScreen0132536Navigator from '../features/BlankScreen0132536/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings132568: { screen: Settings132568Navigator },
Settings132560: { screen: Settings132560Navigator },
UserProfile132558: { screen: UserProfile132558Navigator },
BlankScreen0132536: { screen: BlankScreen0132536Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
