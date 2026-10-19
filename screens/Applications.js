import { useEffect, useState } from 'react';
import {
  Alert,
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';
import { onValue, ref, remove } from 'firebase/database';
import { rtdb } from '../database/database';
import { applicationsStyles } from '../styles/globalStyles';

export default function Applications() {
  const [applications, setApplications] = useState(null);
  const [loadError, setLoadError] = useState('');
  const [applicationToDelete, setApplicationToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Lytter efter ansøgninger og sorterer dem 
  useEffect(() => {
    const applicationsRef = ref(rtdb, 'applications');
    const unsubscribe = onValue(
      applicationsRef,
      (snapshot) => {
        const data = snapshot.val() || {};
        const entries = Object.entries(data)
          .map(([id, application]) => ({ id, ...application }))
          .sort((first, second) => second.appliedAt - first.appliedAt);
        setApplications(entries);
        setLoadError('');
      },
      (error) => {
        setLoadError(error.message);
        setApplications([]);
      }
    );

    return unsubscribe;
  }, []);

  // Sletter den valgte ansøgning og viser fejl, hvis det mislykkes.
  const deleteApplication = async () => {
    if (!applicationToDelete) return;

    setIsDeleting(true);
    try {
      await remove(ref(rtdb, `applications/${applicationToDelete.id}`));
      setApplicationToDelete(null);
    } catch (error) {
      Alert.alert('Could not delete application', error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  // Viser ansøgningerne og beder om bekræftelse før sletning.
  return (
    <>
      <FlatList
        contentContainerStyle={applicationsStyles.container}
        data={applications || []}
        keyExtractor={(application) => application.id}
        ListHeaderComponent={<Text style={applicationsStyles.title}>Applications</Text>}
        ListEmptyComponent={
          applications === null ? (
            <ActivityIndicator />
          ) : (
            <Text style={applicationsStyles.emptyMessage}>
              {loadError || 'You have not applied for any jobs yet.'}
            </Text>
          )
        }
        renderItem={({ item }) => (
          <View style={applicationsStyles.applicationItem}>
            <Text style={applicationsStyles.jobTitle}>{item.job?.title || 'Job application'}</Text>
            <Text style={applicationsStyles.jobMeta}>
              {item.job?.type || ''}{item.job?.education ? ` · Education: ${item.job.education}` : ''}
            </Text>
            {item.appliedAt ? (
              <Text style={applicationsStyles.date}>Applied {new Date(item.appliedAt).toLocaleDateString()}</Text>
            ) : null}
            {item.message ? (
              <Text style={applicationsStyles.message}>“{item.message}”</Text>
            ) : null}
            <Pressable
              style={applicationsStyles.deleteButton}
              onPress={() => setApplicationToDelete(item)}
              accessibilityRole="button"
              accessibilityLabel={`Delete application for ${item.job?.title || 'job'}`}
            >
              <Text style={applicationsStyles.deleteButtonText}>Delete application</Text>
            </Pressable>
          </View>
        )}
      />
      <Modal
        visible={Boolean(applicationToDelete)}
        transparent
        animationType="fade"
        onRequestClose={() => setApplicationToDelete(null)}
      >
        <View style={applicationsStyles.modalBackdrop}>
          <View style={applicationsStyles.confirmationDialog}>
            <Text style={applicationsStyles.confirmationTitle}>Delete application?</Text>
            <Text style={applicationsStyles.confirmationMessage}>
              This will permanently delete your application for {applicationToDelete?.job?.title || 'this job'}.
            </Text>
            <Pressable
              style={applicationsStyles.confirmDeleteButton}
              onPress={deleteApplication}
              disabled={isDeleting}
            >
              <Text style={applicationsStyles.confirmDeleteText}>
                {isDeleting ? 'Deleting...' : 'Delete application'}
              </Text>
            </Pressable>
            <Pressable
              style={applicationsStyles.cancelButton}
              onPress={() => setApplicationToDelete(null)}
              disabled={isDeleting}
            >
              <Text style={applicationsStyles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}
