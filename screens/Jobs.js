import { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';
import { get, onValue, ref } from 'firebase/database';
import { rtdb } from '../database/database';
import { jobsStyles } from '../styles/globalStyles';

const jobs = [
  {
    id: '1',
    title: 'Marketing Assistant',
    type: 'Part-time',
    education: 'Markedsføringsøkonom',
    description: 'Help create campaigns and engaging content for new customers.',
  },
  {
    id: '2',
    title: 'Software Developer',
    type: 'Full-time',
    education: 'Datamatiker',
    description: 'Build and improve digital products with a creative tech team.',
  },
  {
    id: '3',
    title: 'Graphic Designer',
    type: 'Freelance',
    education: 'HTX',
    description: 'Design visual material for brands, websites, and social media.',
  },
  {
    id: '4',
    title: 'Customer Service Representative',
    type: 'Full-time',
    education: 'HHX',
    description: 'Support customers and help them get the most from our services.',
  },
  {
    id: '5',
    title: 'Research Assistant',
    type: 'Student job',
    education: 'STX',
    description: 'Collect information and support research projects in a growing team.',
  },
  {
    id: '6',
    title: 'Office Administration Assistant',
    type: 'Full-time',
    education: 'Kontoruddannelsen',
    description: 'Coordinate schedules, correspondence, and daily office tasks.',
  },
  {
    id: '7',
    title: 'Retail Sales Associate',
    type: 'Part-time',
    education: 'Detailhandelsuddannelsen',
    description: 'Help customers choose products and keep the shop running smoothly.',
  },
  {
    id: '8',
    title: 'Care Assistant',
    type: 'Full-time',
    education: 'Social- og sundhedsassistent',
    description: 'Support residents with daily care and wellbeing in a care home.',
  },
  {
    id: '9',
    title: 'Carpenter',
    type: 'Full-time',
    education: 'Tømrer',
    description: 'Build and repair timber structures on residential projects.',
  },
  {
    id: '10',
    title: 'Electrical Installation Technician',
    type: 'Full-time',
    education: 'Elektriker',
    description: 'Install, inspect, and maintain electrical systems at client sites.',
  },
  {
    id: '11',
    title: 'Automotive Mechanic',
    type: 'Full-time',
    education: 'Mekaniker',
    description: 'Diagnose faults and service cars in a modern workshop.',
  },
  {
    id: '12',
    title: 'Kindergarten Educator',
    type: 'Full-time',
    education: 'Pædagog',
    description: 'Plan activities that support children’s learning and development.',
  },
  {
    id: '13',
    title: 'Primary School Teacher',
    type: 'Full-time',
    education: 'Folkeskolelærer',
    description: 'Teach and support pupils across subjects in a local school.',
  },
  {
    id: '14',
    title: 'Registered Nurse',
    type: 'Full-time',
    education: 'Sygeplejerske',
    description: 'Provide patient care and coordinate treatment with the clinical team.',
  },
  {
    id: '15',
    title: 'Social Worker',
    type: 'Full-time',
    education: 'Socialrådgiver',
    description: 'Guide individuals and families toward support and public services.',
  },
  {
    id: '16',
    title: 'Financial Analyst Assistant',
    type: 'Full-time',
    education: 'Finansøkonom',
    description: 'Prepare financial reports and assist with client portfolio reviews.',
  },
  {
    id: '17',
    title: 'Business Administration Coordinator',
    type: 'Full-time',
    education: 'HA (erhvervsøkonomi)',
    description: 'Support business planning and analyze operational performance.',
  },
  {
    id: '18',
    title: 'Legal Assistant',
    type: 'Full-time',
    education: 'Jura',
    description: 'Research cases and prepare documents for the firm’s legal team.',
  },
  {
    id: '19',
    title: 'Junior Doctor',
    type: 'Full-time',
    education: 'Medicin',
    description: 'Join a supervised clinical team caring for hospital patients.',
  },
  {
    id: '20',
    title: 'Healthcare Support Worker',
    type: 'Part-time',
    education: 'HF',
    description: 'Assist clinical staff with patient support and everyday ward tasks.',
  },
  {
    id: '21',
    title: 'Junior Web Technician',
    type: 'Student job',
    education: 'HTX',
    description: 'Help test websites and troubleshoot technical issues for clients.',
  },
  {
    id: '22',
    title: 'Junior Account Coordinator',
    type: 'Full-time',
    education: 'HHX',
    description: 'Coordinate customer accounts, orders, and sales follow-up.',
  },
  {
    id: '23',
    title: 'Laboratory Assistant',
    type: 'Student job',
    education: 'STX',
    description: 'Prepare samples and record results for a research laboratory.',
  },
  {
    id: '24',
    title: 'Digital Campaign Coordinator',
    type: 'Full-time',
    education: 'Markedsføringsøkonom',
    description: 'Schedule online campaigns and report on audience engagement.',
  },
  {
    id: '25',
    title: 'IT Support Technician',
    type: 'Full-time',
    education: 'Datamatiker',
    description: 'Resolve software and device issues for colleagues and customers.',
  },
];

export default function Jobs({ onApply }) {
  const [filterMode, setFilterMode] = useState('Show all');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [filterPickerVisible, setFilterPickerVisible] = useState(false);
  const [appliedJobIds, setAppliedJobIds] = useState([]);

  useEffect(() => {
    const unsubscribe = onValue(ref(rtdb, 'applications'), (snapshot) => {
      const applications = snapshot.val() || {};
      setAppliedJobIds(
        Object.values(applications).map((application) => application.job?.id)
      );
    });

    return unsubscribe;
  }, []);

  const selectFilterMode = async (mode) => {
    setFilterPickerVisible(false);

    if (mode === 'Show all') {
      setFilterMode(mode);
      return;
    }

    try {
      const snapshot = await get(ref(rtdb, 'profiles/current/education'));
      setSelectedEducation(snapshot.val() || '');
      setFilterMode(mode);
    } catch (error) {
      Alert.alert('Could not load education', error.message);
    }
  };

  const educationFilteredJobs = filterMode === 'Show all'
    ? jobs
    : jobs.filter((job) => job.education === selectedEducation);
  const visibleJobs = educationFilteredJobs.filter(
    (job) => !appliedJobIds.includes(job.id)
  );

  const listHeader = (
    <View>
      <Text style={jobsStyles.title}>Find a job for you</Text>
      <Text style={jobsStyles.filterLabel}>Jobs</Text>
      <Pressable
        accessibilityRole="button"
        style={jobsStyles.filterDropdown}
        onPress={() => setFilterPickerVisible(true)}
      >
        <Text style={jobsStyles.filterValue}>{filterMode}</Text>
        <Text style={jobsStyles.filterArrow}>⌄</Text>
      </Pressable>
      {filterMode === 'Filter by education' && selectedEducation ? (
        <Text style={jobsStyles.filterSummary}>
          Showing jobs for {selectedEducation}
        </Text>
      ) : null}
      {filterMode === 'Filter by education' && !selectedEducation ? (
        <Text style={jobsStyles.emptyMessage}>
          Choose an education in the Me tab to see matching jobs.
        </Text>
      ) : null}
    </View>
  );

  return (
    <>
      <FlatList
        contentContainerStyle={jobsStyles.container}
        data={visibleJobs}
        keyExtractor={(job) => job.id}
        ListHeaderComponent={listHeader}
        ListEmptyComponent={
          filterMode === 'Filter by education' && !selectedEducation ? null : (
            <Text style={jobsStyles.emptyMessage}>
              {filterMode === 'Filter by education'
                ? `No unapplied jobs found for ${selectedEducation}.`
                : 'You have applied for all available jobs.'}
            </Text>
          )
        }
        renderItem={({ item }) => (
          <View style={jobsStyles.jobCard}>
            <Text style={jobsStyles.jobTitle}>{item.title}</Text>
            <Text style={jobsStyles.jobType}>{item.type}</Text>
            <Text style={jobsStyles.educationTag}>Education: {item.education}</Text>
            <Text style={jobsStyles.description}>{item.description}</Text>
            <Pressable
              style={jobsStyles.applyButton}
              onPress={() => onApply(item)}
            >
              <Text style={jobsStyles.applyButtonText}>Apply for job</Text>
            </Pressable>
          </View>
        )}
      />
      <Modal
        visible={filterPickerVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setFilterPickerVisible(false)}
      >
        <View style={jobsStyles.modalBackdrop}>
          <View style={jobsStyles.filterModal}>
            <Text style={jobsStyles.filterModalTitle}>Filter jobs</Text>
            {['Show all', 'Filter by education'].map((mode) => (
              <Pressable
                key={mode}
                style={jobsStyles.filterOption}
                onPress={() => selectFilterMode(mode)}
              >
                <Text style={jobsStyles.filterOptionText}>{mode}</Text>
              </Pressable>
            ))}
            <Pressable
              style={jobsStyles.filterCancel}
              onPress={() => setFilterPickerVisible(false)}
            >
              <Text style={jobsStyles.filterCancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

