import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { meStyles } from '../styles/globalStyles';

export default function Me() {
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');

  const clearForm = () => {
    setName('');
    setInterests('');
    setEducation('');
    setExperience('');
  };

  return (
    <ScrollView contentContainerStyle={meStyles.container}>
      <Text style={meStyles.title}>Tell us about yourself</Text>
      <Text style={meStyles.description}>
        Add a few details about yourself so we can help you find jobs that suit
        you.
      </Text>

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
        <TextInput
          style={meStyles.input}
          placeholder="Your education"
          value={education}
          onChangeText={setEducation}
        />

        <Text style={meStyles.label}>Experience</Text>
        <TextInput
          style={[meStyles.input, meStyles.multilineInput]}
          placeholder="Tell us about your experience"
          value={experience}
          onChangeText={setExperience}
          multiline
        />

        <Pressable style={meStyles.button} onPress={clearForm}>
          <Text style={meStyles.buttonText}>Apply</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

