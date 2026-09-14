import { FlatList, Text, View } from 'react-native';
import { jobsStyles } from '../styles/globalStyles';

const jobs = [
  {
    id: '1',
    title: 'Marketing Assistant',
    type: 'Part-time',
    description: 'Help create campaigns and engaging content for new customers.',
  },
  {
    id: '2',
    title: 'Software Developer',
    type: 'Full-time',
    description: 'Build and improve digital products with a creative tech team.',
  },
  {
    id: '3',
    title: 'Graphic Designer',
    type: 'Freelance',
    description: 'Design visual material for brands, websites, and social media.',
  },
  {
    id: '4',
    title: 'Customer Service Representative',
    type: 'Full-time',
    description: 'Support customers and help them get the most from our services.',
  },
  {
    id: '5',
    title: 'Research Assistant',
    type: 'Student job',
    description: 'Collect information and support research projects in a growing team.',
  },
];

export default function Jobs() {
  return (
    <FlatList
      contentContainerStyle={jobsStyles.container}
      data={jobs}
      keyExtractor={(job) => job.id}
      ListHeaderComponent={<Text style={jobsStyles.title}>Find a job for you</Text>}
      renderItem={({ item }) => (
        <View style={jobsStyles.jobCard}>
          <Text style={jobsStyles.jobTitle}>{item.title}</Text>
          <Text style={jobsStyles.jobType}>{item.type}</Text>
          <Text style={jobsStyles.description}>{item.description}</Text>
        </View>
      )}
    />
  );
}

