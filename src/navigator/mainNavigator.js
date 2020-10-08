import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings132631Navigator from '../features/Settings132631/navigator';
import UserProfile132629Navigator from '../features/UserProfile132629/navigator';
import UserProfile132598Navigator from '../features/UserProfile132598/navigator';
import Tutorial132597Navigator from '../features/Tutorial132597/navigator';
import NotificationList132569Navigator from '../features/NotificationList132569/navigator';
import Settings132568Navigator from '../features/Settings132568/navigator';
import Settings132560Navigator from '../features/Settings132560/navigator';
import UserProfile132558Navigator from '../features/UserProfile132558/navigator';
import BlankScreen0132536Navigator from '../features/BlankScreen0132536/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings132631: { screen: Settings132631Navigator },
UserProfile132629: { screen: UserProfile132629Navigator },
UserProfile132598: { screen: UserProfile132598Navigator },
Tutorial132597: { screen: Tutorial132597Navigator },
NotificationList132569: { screen: NotificationList132569Navigator },
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
