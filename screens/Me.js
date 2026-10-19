import { useEffect, useState } from 'react';
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { get, ref, remove, set } from 'firebase/database';
import { rtdb } from '../database/database';
import { meStyles } from '../styles/globalStyles';

// Uddannelser, som brugeren kan vælge i profilformularen.
const educationOptions = [
  'STX',
  'HHX',
  'HTX',
  'HF',
  'Kontoruddannelsen',
  'Detailhandelsuddannelsen',
  'Social- og sundhedsassistent',
  'Tømrer',
  'Elektriker',
  'Mekaniker',
  'Pædagog',
  'Folkeskolelærer',
  'Sygeplejerske',
  'Socialrådgiver',
  'Finansøkonom',
  'Markedsføringsøkonom',
  'Datamatiker',
  'HA (erhvervsøkonomi)',
  'Jura',
  'Medicin',
];

export default function Me() {
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [educationPickerVisible, setEducationPickerVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasProfile, setHasProfile] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteAccountVisible, setDeleteAccountVisible] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  // Henter den gemte profil, når skærmen åbnes.
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const snapshot = await get(ref(rtdb, 'profiles/current'));
        if (snapshot.exists()) {
          const profile = snapshot.val();
          setName(profile.name || '');
          setInterests(profile.interests || '');
          setEducation(profile.education || '');
          setExperience(profile.experience || '');
          setHasProfile(true);
        }
      } catch (error) {
        Alert.alert('Could not load profile', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, []);

  // Gemmer profilfelterne samlet i databasen.
  const saveProfile = async () => {
    setIsSaving(true);
    try {
      await set(ref(rtdb, 'profiles/current'), {
        name: name.trim(),
        interests: interests.trim(),
        education,
        experience: experience.trim(),
        updatedAt: Date.now(),
      });
      setHasProfile(true);
      setIsEditing(false);
      Alert.alert('Saved', 'Your profile has been saved.');
    } catch (error) {
      Alert.alert('Could not save profile', error.message);
    } finally {
      setIsSaving(false);
    }
  };

  // Sletter de gemte oplysninger efter brugerens bekræftelse.
  const deleteAccount = async () => {
    setIsDeletingAccount(true);
    try {
      await remove(ref(rtdb));
      setName('');
      setInterests('');
      setEducation('');
      setExperience('');
      setHasProfile(false);
      setIsEditing(false);
      setDeleteAccountVisible(false);
      Alert.alert('Account deleted', 'All information in the shared database has been deleted.');
    } catch (error) {
      Alert.alert('Could not delete account', error.message);
    } finally {
      setIsDeletingAccount(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={meStyles.container}>
      <Text style={meStyles.title}>Tell us about yourself</Text>
      {isLoading ? (
        <Text style={meStyles.profileValue}>Loading your information...</Text>
      ) : hasProfile && !isEditing ? (
        <View style={meStyles.profileView}>
          {name ? <Text style={meStyles.profileName}>Name: {name}</Text> : null}
          {interests ? <Text style={meStyles.profileValue}>Interests: {interests}</Text> : null}
          {education ? <Text style={meStyles.profileValue}>Education: {education}</Text> : null}
          {experience ? <Text style={meStyles.profileValue}>Experience: {experience}</Text> : null}
          <Pressable
            style={meStyles.button}
            onPress={() => setIsEditing(true)}
          >
            <Text style={meStyles.buttonText}>Edit information</Text>
          </Pressable>
        </View>
      ) : (
        <>
          {!hasProfile && (
            <Text style={meStyles.description}>
              Add a few details about yourself so we can help you find jobs that suit
              you.
            </Text>
          )}
          <View style={meStyles.form}>
        <Text style={meStyles.label}>Name</Text>
        <TextInput
          style={meStyles.input}
          placeholder="Your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={meStyles.label}>Interests</Text>
        <TextInput
          style={meStyles.input}
          placeholder="What are you interested in?"
          value={interests}
          onChangeText={setInterests}
        />

        <Text style={meStyles.label}>Education</Text>
        <Pressable
          accessibilityRole="button"
          style={[meStyles.input, meStyles.dropdown]}
          onPress={() => setEducationPickerVisible(true)}
        >
          <Text style={education ? meStyles.dropdownValue : meStyles.dropdownPlaceholder}>
            {education || 'Select your education'}
          </Text>
          <Text style={meStyles.dropdownArrow}>⌄</Text>
        </Pressable>

        <Modal
          visible={educationPickerVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setEducationPickerVisible(false)}
        >
          <View style={meStyles.modalBackdrop}>
            <View style={meStyles.dropdownModal}>
              <Text style={meStyles.dropdownTitle}>Select your education</Text>
              <ScrollView>
                {educationOptions.map((option) => (
                  <Pressable
                    key={option}
                    style={meStyles.dropdownOption}
                    onPress={() => {
                      setEducation(option);
                      setEducationPickerVisible(false);
                    }}
                  >
                    <Text style={meStyles.dropdownOptionText}>{option}</Text>
                  </Pressable>
                ))}
              </ScrollView>
              <Pressable
                style={meStyles.dropdownCancel}
                onPress={() => setEducationPickerVisible(false)}
              >
                <Text style={meStyles.dropdownCancelText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Text style={meStyles.label}>Experience</Text>
        <TextInput
          style={[meStyles.input, meStyles.multilineInput]}
          placeholder="Tell us about your experience"
          value={experience}
          onChangeText={setExperience}
          multiline
        />

        <Pressable
          style={meStyles.button}
          onPress={saveProfile}
          disabled={isSaving}
        >
          <Text style={meStyles.buttonText}>
            {isSaving ? 'Saving...' : 'Apply'}
          </Text>
        </Pressable>
          </View>
        </>
      )}
      {!isLoading && (
        <Pressable
          style={meStyles.deleteAccountButton}
          onPress={() => setDeleteAccountVisible(true)}
          disabled={isDeletingAccount}
        >
          <Text style={meStyles.deleteAccountButtonText}>Delete account</Text>
        </Pressable>
      )}
      <Modal
        visible={deleteAccountVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDeleteAccountVisible(false)}
      >
        <View style={meStyles.modalBackdrop}>
          <View style={meStyles.confirmationDialog}>
            <Text style={meStyles.confirmationTitle}>
              Are you sure you want to delete your account?
            </Text>
            <Pressable
              style={meStyles.confirmDeleteButton}
              onPress={deleteAccount}
              disabled={isDeletingAccount}
            >
              <Text style={meStyles.confirmDeleteText}>
                {isDeletingAccount ? 'Deleting...' : 'Delete'}
              </Text>
            </Pressable>
            <Pressable
              style={meStyles.confirmCancelButton}
              onPress={() => setDeleteAccountVisible(false)}
              disabled={isDeletingAccount}
            >
              <Text style={meStyles.confirmCancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
