import React from 'react';
// import { NavigationContainer } from '@react-navigation/native'; // This breaks the precommit hook
const {NavigationContainer} = require('@react-navigation/native'); // Workaround to not let TypeScript analyze this library
import {navigationRef} from './src/navigation/controls';
import MainNavigator from './src/navigation/MainNavigator';

import {API_URL} from './config/env-variables';

const App = () => {
    console.log(API_URL);
    // TODO: Remove margins top and bottom and replace with separator
    // TODO: Implement isHorizonal for separator
    return (
        <NavigationContainer ref={navigationRef}>
            <MainNavigator />
        </NavigationContainer>
    );
};

export default App;
