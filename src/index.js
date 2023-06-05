import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DashboardItem = ({
  image,
  title,
  uniquePlays,
  totalPlays,
  completionRate,
}) => {
  const completionPercentage = completionRate * 100;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.graphContainer}>
        <Text style={styles.boldLabel}>
          Unique Plays: <Text style={styles.regularLabel}>{uniquePlays}</Text>
        </Text>
        <Text style={styles.boldLabel}>
          Total Plays: <Text style={styles.regularLabel}>{totalPlays}</Text>
        </Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View
          style={[styles.progressBar, { width: `${completionPercentage}%` }]}
        />
      </View>
      <Text
        style={styles.progressLabel}
      >{`${completionPercentage}% Completion`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    resizeMode: "cover",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  graphContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  graphLabel: {
    fontSize: 12,
    color: "gray",
  },
  progressBarContainer: {
    width: "80%",
    height: 6,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "red",
    borderRadius: 5,
  },
  progressLabel: {
    marginTop: 5,
    fontSize: 12,
    color: "blue",
  },
  boldLabel: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
  },
  regularLabel: {
    fontWeight: "normal",
  },
});

export default DashboardItem;
