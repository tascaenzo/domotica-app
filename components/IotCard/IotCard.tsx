import React from "react";
import { View } from "react-native";
import { useStyles } from './style';

interface Props {
  style?: Object,
  icon: JSX.Element,
  label: string,
  color: string,
  onPress?: () => void,
};

const IotCard = ({ style, icon, label, color , onPress }: Props) => {
  const styles = useStyles({ color });

  return (
    <View style={{...styles.container, ...style}}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
    </View>
  )
}

export default IotCard;
