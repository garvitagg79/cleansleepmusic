import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DashboardItem from "./src";

const App = () => {
  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomCompletionRate = () => {
    return getRandomValue(0, 100);
  };

  const generateRandomSongs = (count) => {
    const songs = [];

    for (let i = 1; i <= count; i++) {
      const uniquePlays = getRandomValue(0, 100);
      const totalPlays = getRandomValue(0, 200);
      const completionRate = getRandomCompletionRate() / 100;

      const song = {
        image: `https://freestocks.org/fs/wp-content/uploads/2023/04/yellow_tulips-1024x683.jpg`,
        title: `Song ${i}`,
        uniquePlays,
        totalPlays,
        completionRate,
      };

      songs.push(song);
    }

    return songs;
  };
  // Example data for songs with categories
  const songData = [
    {
      category: "Category 1",
      songs: [
        {
          image:
            "https://freestocks.org/fs/wp-content/uploads/2023/04/yellow_tulips-1024x683.jpg",
          title: "Song 1",
          uniquePlays: 10,
          totalPlays: 20,
          completionRate: 0.75,
        },
        {
          image:
            "https://freestocks.org/fs/wp-content/uploads/2023/04/cherry_tree_blossom_closeup_5-1024x683.jpg",
          title: "Song 2",
          uniquePlays: 5,
          totalPlays: 15,
          completionRate: 0.6,
        },
      ],
    },
    {
      category: "Category 2",
      songs: [
        {
          image:
            "https://freestocks.org/fs/wp-content/uploads/2023/04/yellow_tulips-1024x683.jpg",
          title: "Song 1",
          uniquePlays: 10,
          totalPlays: 20,
          completionRate: 0.75,
        },
        {
          image:
            "https://freestocks.org/fs/wp-content/uploads/2023/04/cherry_tree_blossom_closeup_5-1024x683.jpg",
          title: "Song 2",
          uniquePlays: 5,
          totalPlays: 15,
          completionRate: 0.6,
        },
        {
          image:
            "https://freestocks.org/fs/wp-content/uploads/2023/04/cherry_tree_blossom_closeup_5-1024x683.jpg",
          title: "Song 3",
          uniquePlays: 5,
          totalPlays: 15,
          completionRate: 1.0,
        },
        {
          image:
            "https://freestocks.org/fs/wp-content/uploads/2023/04/cherry_tree_blossom_closeup_5-1024x683.jpg",
          title: "Song 4",
          uniquePlays: 5,
          totalPlays: 15,
          completionRate: 0.3,
        },
      ],
    },
    {
      category: "Category 3",
      songs: generateRandomSongs(3),
    },
    // Add more categories and songs as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        {songData.map((category, index) => (
          <View key={index} style={styles.category}>
            <Text style={styles.categoryTitle}>{category.category}</Text>
            <View style={styles.songContainer}>
              {category.songs.map((song, songIndex) => (
                <View key={songIndex} style={styles.songWrapper}>
                  <DashboardItem
                    key={songIndex}
                    image={song.image}
                    title={song.title}
                    uniquePlays={song.uniquePlays}
                    totalPlays={song.totalPlays}
                    completionRate={song.completionRate}
                  />
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  categoryContainer: {
    flexDirection: "column",
  },
  category: {
    marginRight: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  songContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    //flexWrap: "wrap",
  },
  songWrapper: {
    marginBottom: 10,
    width: "28%",
  },
});

export default App;
