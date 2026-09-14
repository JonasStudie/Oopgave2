import { StyleSheet } from 'react-native';

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
    paddingBottom: 12,
    paddingTop: 12,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
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
});

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
  description: {
    color: '#5F6B76',
    fontSize: 15,
    lineHeight: 22,
  },
});
