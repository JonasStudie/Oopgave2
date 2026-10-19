import { StyleSheet } from 'react-native';

// Fælles layout og typografi for appens navigation og velkomstskærm.
export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: 16,
    paddingTop: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  tabText: {
    color: '#777',
    fontSize: 16,
  },
  activeTabText: {
    color: '#000',
    fontWeight: '700',
  },
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 28,
    paddingTop: 72,
  },
  introduction: {
    width: '100%',
  },
  title: {
    color: '#17202A',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38,
    marginBottom: 18,
  },
  description: {
    color: '#5F6B76',
    fontSize: 17,
    lineHeight: 27,
  },
  actions: {
    gap: 12,
    width: '100%',
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: '#17202A',
    borderRadius: 8,
    padding: 16,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    alignItems: 'center',
    borderColor: '#17202A',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
  },
  secondaryButtonText: {
    color: '#17202A',
    fontSize: 16,
    fontWeight: '700',
  },
});

// Formular- og visningsstile til brugerens profil.
export const meStyles = StyleSheet.create({
  container: {
    padding: 28,
    paddingTop: 56,
  },
  title: {
    color: '#17202A',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    color: '#5F6B76',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 28,
  },
  form: {
    width: '100%',
  },
  profileView: {
    width: '100%',
  },
  profileName: {
    color: '#17202A',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  profileValue: {
    color: '#34414A',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 14,
  },
  label: {
    color: '#17202A',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderColor: '#D5DADD',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 20,
    padding: 14,
  },
  dropdown: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownValue: {
    color: '#17202A',
    fontSize: 16,
  },
  dropdownPlaceholder: {
    color: '#777',
    fontSize: 16,
  },
  dropdownArrow: {
    color: '#5F6B76',
    fontSize: 20,
  },
  modalBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  dropdownModal: {
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: '80%',
    padding: 18,
  },
  dropdownTitle: {
    color: '#17202A',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  dropdownOption: {
    borderBottomColor: '#E5E8EA',
    borderBottomWidth: 1,
    minHeight: 48,
    justifyContent: 'center',
    paddingVertical: 12,
  },
  dropdownOptionText: {
    color: '#17202A',
    fontSize: 16,
  },
  dropdownCancel: {
    alignItems: 'center',
    paddingTop: 14,
  },
  dropdownCancelText: {
    color: '#3478A5',
    fontSize: 16,
    fontWeight: '600',
  },
  multilineInput: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#17202A',
    borderRadius: 8,
    marginTop: 8,
    padding: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  deleteAccountButton: {
    alignItems: 'center',
    borderColor: '#B42318',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 32,
    minHeight: 50,
    padding: 14,
  },
  deleteAccountButtonText: {
    color: '#B42318',
    fontSize: 15,
    fontWeight: '700',
  },
  confirmationDialog: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  confirmationTitle: {
    color: '#17202A',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 10,
  },
  confirmationMessage: {
    color: '#5F6B76',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  confirmDeleteButton: {
    alignItems: 'center',
    backgroundColor: '#B42318',
    borderRadius: 6,
    justifyContent: 'center',
    minHeight: 48,
    padding: 12,
  },
  confirmDeleteText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  confirmCancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    minHeight: 44,
  },
  confirmCancelText: {
    color: '#3478A5',
    fontSize: 15,
    fontWeight: '600',
  },
});

// Stile til joboversigt, ansøgning og oversigten over indsendte ansøgninger.
export const jobsStyles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 36,
  },
  title: {
    color: '#17202A',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },
  filterLabel: {
    color: '#17202A',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },
  filterDropdown: {
    alignItems: 'center',
    borderColor: '#D5DADD',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    minHeight: 50,
    paddingHorizontal: 14,
  },
  filterValue: {
    color: '#17202A',
    fontSize: 16,
  },
  filterArrow: {
    color: '#5F6B76',
    fontSize: 20,
  },
  filterSummary: {
    color: '#5F6B76',
    fontSize: 14,
    marginBottom: 14,
  },
  emptyMessage: {
    color: '#5F6B76',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  modalBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  filterModal: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 18,
  },
  filterModalTitle: {
    color: '#17202A',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  filterOption: {
    borderBottomColor: '#E5E8EA',
    borderBottomWidth: 1,
    justifyContent: 'center',
    minHeight: 48,
  },
  filterOptionText: {
    color: '#17202A',
    fontSize: 16,
  },
  filterCancel: {
    alignItems: 'center',
    paddingTop: 14,
  },
  filterCancelText: {
    color: '#3478A5',
    fontSize: 16,
    fontWeight: '600',
  },
  jobCard: {
    borderColor: '#D5DADD',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 14,
    padding: 18,
  },
  jobTitle: {
    color: '#17202A',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 6,
  },
  jobType: {
    color: '#3478A5',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  educationTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#E8F3EE',
    borderRadius: 4,
    color: '#24664E',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  description: {
    color: '#5F6B76',
    fontSize: 15,
    lineHeight: 22,
  },
  applyButton: {
    alignItems: 'center',
    backgroundColor: '#17202A',
    borderRadius: 6,
    marginTop: 14,
    minHeight: 46,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});

export const applicationStyles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 32,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 18,
    minHeight: 40,
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#3478A5',
    fontSize: 15,
    fontWeight: '600',
  },
  title: {
    color: '#17202A',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 18,
  },
  jobSummary: {
    borderBottomColor: '#D5DADD',
    borderBottomWidth: 1,
    marginBottom: 22,
    paddingBottom: 18,
  },
  jobTitle: {
    color: '#17202A',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  jobMeta: {
    color: '#3478A5',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  jobDescription: {
    color: '#5F6B76',
    fontSize: 15,
    lineHeight: 22,
  },
  sectionTitle: {
    color: '#17202A',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
  },
  profileSummary: {
    marginBottom: 20,
  },
  profileLine: {
    color: '#34414A',
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 5,
  },
  notice: {
    color: '#9B4D26',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  messageInput: {
    borderColor: '#D5DADD',
    borderRadius: 8,
    borderWidth: 1,
    color: '#17202A',
    fontSize: 16,
    marginBottom: 20,
    minHeight: 120,
    padding: 14,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#17202A',
    borderRadius: 8,
    justifyContent: 'center',
    minHeight: 54,
    padding: 16,
  },
  disabledButton: {
    opacity: 0.6,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export const applicationsStyles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 36,
  },
  title: {
    color: '#17202A',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },
  applicationItem: {
    borderBottomColor: '#D5DADD',
    borderBottomWidth: 1,
    paddingBottom: 18,
    paddingTop: 16,
  },
  jobTitle: {
    color: '#17202A',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 6,
  },
  jobMeta: {
    color: '#3478A5',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  date: {
    color: '#5F6B76',
    fontSize: 13,
    marginBottom: 8,
  },
  message: {
    color: '#34414A',
    fontSize: 15,
    lineHeight: 22,
  },
  emptyMessage: {
    color: '#5F6B76',
    fontSize: 15,
    lineHeight: 22,
  },
  deleteButton: {
    alignSelf: 'flex-start',
    borderColor: '#B42318',
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 12,
    minHeight: 42,
    paddingHorizontal: 12,
  },
  deleteButtonText: {
    color: '#B42318',
    fontSize: 14,
    fontWeight: '600',
  },
  modalBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  confirmationDialog: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  confirmationTitle: {
    color: '#17202A',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 10,
  },
  confirmationMessage: {
    color: '#5F6B76',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  confirmDeleteButton: {
    alignItems: 'center',
    backgroundColor: '#B42318',
    borderRadius: 6,
    justifyContent: 'center',
    minHeight: 48,
    padding: 12,
  },
  confirmDeleteText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    minHeight: 44,
  },
  cancelText: {
    color: '#3478A5',
    fontSize: 15,
    fontWeight: '600',
  },
});
