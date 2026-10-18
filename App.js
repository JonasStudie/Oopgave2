import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Home from './screens/Home';
import Me from './screens/Me';
import Jobs from './screens/Jobs';
import Application from './screens/Application';
import Applications from './screens/Applications';
import { appStyles } from './styles/globalStyles';

const screens = {
  Home,
  Me,
  Jobs,
  Applications,
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState('Home');
  const [selectedJob, setSelectedJob] = useState(null);
  const Screen = screens[activeScreen];

  const openApplication = (job) => {
    setSelectedJob(job);
    setActiveScreen('Apply');
  };

  return (
    <View style={appStyles.container}>
      <View style={appStyles.content}>
        {activeScreen === 'Apply' ? (
          <Application
            job={selectedJob}
            onBack={() => setActiveScreen('Jobs')}
            onSubmitted={() => setActiveScreen('Applications')}
          />
        ) : (
          <Screen onNavigate={setActiveScreen} onApply={openApplication} />
        )}
      </View>

      {activeScreen !== 'Apply' && (
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
      )}
    </View>
  );
}

