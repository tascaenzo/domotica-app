import { StyleSheet } from 'react-native';

interface Props { showMenu: boolean, scaleValue: unknown, offsetValue: unknown }

export const useStyles = (props: Props) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#293241',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  screen: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f7f7f7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderRadius: props.showMenu ? 15 : 0,
  },

  animated: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: props.showMenu ? 15 : 0,
    transform: [
      { scale: props.scaleValue as number },
      { translateX: props.offsetValue as number }
    ]
  }
});
