import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 24,
  },
  image: {
    marginTop: 24,
    marginBottom: 71,
  },
  content: {
    backgroundColor: '#191919',
    width: Dimensions.get('window').width,
    flex: 1,
  },
  inputGroup: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
    marginTop: -26,
  },
  button: {
    backgroundColor: '#1E6F9F',
    borderRadius: 8,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
  input: {
    height: 52,
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 16,
    color: '#FFF',
    borderColor: '#1E6F9F',
    // borderWidth:1,
  },
  countersContent: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20,
  },
  counters: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    color: "#4896C5",
    fontSize: 14,
    fontWeight: 'bold',
  },
  indicator: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    backgroundColor: '#262626',
    color: "#FFF",
    fontSize: 14,
    fontWeight: 'bold',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#262626',
    marginBottom: 20,
  },
  emptyComponent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 48,
    gap: 16,
  },
  emptyText: {
    flexDirection: 'column',
    gap: 2,
  },
  emptyImage: {},
  emptyTitle: {
    color: "#808080",
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptySubTitle: {
    color: "#808080",
    fontSize: 14,
  },
  itemContainer: {
    backgroundColor: '#262626',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 16,
    gap: 8,
    flexDirection: 'row',
    alignItems: "center"
  },
  itemText: {
    flex: 1,
    color: "#f2f2f2",
    fontSize: 14,
  },
  itemButton: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  }
});