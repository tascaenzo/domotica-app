import React from "react";
import { View, Text } from "react-native";
import { useStyles } from "./style";

interface Props {
  style?: Object,
  icon: JSX.Element,
  title: string,
  label: string,
  primaryColor: string,
  secondayColor: string,
  onPress?: () => void,
};

const Card = ({style, icon, title, label, primaryColor, secondayColor, onPress }: Props) => {
  const styles = useStyles({ primaryColor, secondayColor });

  return (
    <View style={{...style, ...styles.container }}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Card;
