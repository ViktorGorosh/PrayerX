import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

interface RightActionProps {
  onPress: () => void
}

export default ({onPress}: RightActionProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.rightAction}>
        <Text style={styles.actionText}>Delete</Text>
      </View>
    </TouchableOpacity>
  )
}

