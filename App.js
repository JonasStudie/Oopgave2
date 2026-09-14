import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Home from './screens/Home';
import Me from './screens/Me';
import Jobs from './screens/Jobs';
import { appStyles } from './styles/globalStyles';

const screens = {
  Home,
  Me,
  Jobs,
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState('Home');
  const Screen = screens[activeScreen];

  return (
    <View style={appStyles.container}>
      <View style={appStyles.content}>
        <Screen onNavigate={setActiveScreen} />
      </View>

      <View style={appStyles.tabBar}>
        {Object.keys(screens).map((screenName) => (
          <Pressable
            key={screenName}
            style={appStyles.tab}
            onPress={() => setActiveScreen(screenName)}
          >
            <Text
              style={[
                appStyles.tabText,
                activeScreen === screenName && appStyles.activeTabText,
              ]}
            >
              {screenName}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

