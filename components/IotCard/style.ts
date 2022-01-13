import { StyleSheet } from "react-native";

interface Props { color: string }

export const useStyles = ({ color }: Props) => StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: "column",

    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,

    borderRadius: 20,
    padding: 6,
    height: 80,


    shadowOpacity: 0.27,
    shadowRadius: 4.00,
    elevation: 1,
  },

  iconContainer: {
    height: 80,
    width: 80,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: color,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },


})