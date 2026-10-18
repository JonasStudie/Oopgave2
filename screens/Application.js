import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { get, push, ref, set } from 'firebase/database';
import { rtdb } from '../database/database';
import { applicationStyles } from '../styles/globalStyles';

export default function Application({ job, onBack, onSubmitted }) {
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const snapshot = await get(ref(rtdb, 'profiles/current'));
        setProfile(snapshot.val());
      } catch (error) {
        Alert.alert('Could not load profile', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, []);

  const submitApplication = async () => {
    if (!profile) {
      Alert.alert('Profile required', 'Add your information in the Me tab before applying.');
      return;
    }

    setIsSubmitting(true);
    try {
      const applicationRef = push(ref(rtdb, 'applications'));
      await set(applicationRef, {
        job: {
          id: job.id,
          title: job.title,
          type: job.type,
          education: job.education,
          description: job.description,
        },
        applicant: {
          name: profile.name || '',
          interests: profile.interests || '',
          education: profile.education || '',
          experience: profile.experience || '',
        },
        message: message.trim(),
        appliedAt: Date.now(),
      });
      Alert.alert('Application sent', `Your application for ${job.title} was saved.`);
      onSubmitted();
    } catch (error) {
      Alert.alert('Could not submit application', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={applicationStyles.container}>
      <Pressable style={applicationStyles.backButton} onPress={onBack}>
        <Text style={applicationStyles.backButtonText}>Back to jobs</Text>
      </Pressable>
      <Text style={applicationStyles.title}>Apply for job</Text>
      <View style={applicationStyles.jobSummary}>
        <Text style={applicationStyles.jobTitle}>{job.title}</Text>
        <Text style={applicationStyles.jobMeta}>{job.type} · Education: {job.education}</Text>
        <Text style={applicationStyles.jobDescription}>{job.description}</Text>
      </View>

      <Text style={applicationStyles.sectionTitle}>Your information</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : profile ? (
        <View style={applicationStyles.profileSummary}>
          <Text style={applicationStyles.profileLine}>Name: {profile.name || 'Not provided'}</Text>
          <Text style={applicationStyles.profileLine}>Interests: {profile.interests || 'Not provided'}</Text>
          <Text style={applicationStyles.profileLine}>Education: {profile.education || 'Not provided'}</Text>
          <Text style={applicationStyles.profileLine}>Experience: {profile.experience || 'Not provided'}</Text>
        </View>
      ) : (
        <Text style={applicationStyles.notice}>Add your information in the Me tab before applying.</Text>
      )}

      <Text style={applicationStyles.sectionTitle}>Message to the employer</Text>
      <TextInput
        style={applicationStyles.messageInput}
        placeholder="Write a message to the employer"
        value={message}
        onChangeText={setMessage}
        multiline
        textAlignVertical="top"
      />

      <Pressable
        style={[applicationStyles.submitButton, (isLoading || isSubmitting) && applicationStyles.disabledButton]}
        onPress={submitApplication}
        disabled={isLoading || isSubmitting}
      >
        <Text style={applicationStyles.submitButtonText}>
          {isSubmitting ? 'Submitting...' : 'Apply for Job'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}
