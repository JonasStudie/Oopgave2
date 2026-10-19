import { Pressable, Text, View } from 'react-native';
import { homeStyles } from '../styles/globalStyles';

export default function Home({ onNavigate }) {
  // Introducerer appen og dens muligheder for brugeren.
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.introduction}>
        <Text style={homeStyles.title}>Find your perfect job</Text>
        <Text style={homeStyles.description}>
          Welcome to our job application app. Discover opportunities that match
          your skills, interests, and ambitions, so you can find a job that
          suits you perfectly.
        </Text>
      </View>
      /* Genveje til joboversigten og brugerens profil. */

      <View style={homeStyles.actions}>
        {}
        <Pressable
          style={homeStyles.primaryButton}
          onPress={() => onNavigate('Jobs')}
        >
          <Text style={homeStyles.primaryButtonText}>Explore jobs</Text>
        </Pressable>
        <Pressable
          style={homeStyles.secondaryButton}
          onPress={() => onNavigate('Me')}
        >
          <Text style={homeStyles.secondaryButtonText}>Go to my profile</Text>
        </Pressable>
      </View>
    </View>
  );
}
