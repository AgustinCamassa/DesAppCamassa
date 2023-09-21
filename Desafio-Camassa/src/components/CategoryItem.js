import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";

const CategoryItem = ({ item, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("products", { item: item })}>
      <Text style={styles.categoryText}>{item}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 22,
    marginHorizontal: 20,
    marginVertical: 8,
    color: colors.white,
    alignItems: "center",
    justifyContent: "center",

    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 20,

    textAlign: "center",
    padding: 8,
  },
});

export default CategoryItem;
