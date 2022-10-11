import { DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigatorScreenParams, ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface StackNavigatorProps<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList = string
> {
    navigation: StackNavigationProp<ParamList, RouteName>
    route: RouteProp<ParamList, RouteName>
}

export interface DrawerNavigatorPropsList<
    RouteName extends keyof HomeRoute
> {
    navigation: DrawerNavigationProp<HomeRoute, RouteName>
    route: RouteProp<HomeRoute, RouteName>
}

export type StackAppRouters = {
    Authentication: undefined;
    Home: NavigatorScreenParams<HomeRoute>;
}

export type Navigations = {
    OnboardingScreen: undefined;
    WelcomeScreen: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
}

export type HomeRoute = {
    PersonalInformation: undefined;
    Homescreen: undefined;
}
