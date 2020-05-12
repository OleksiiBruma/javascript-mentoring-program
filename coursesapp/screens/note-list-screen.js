import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { getNotes } from "../notes-service";

export const NoteListScreen = ({ navigation }) => {
  const [noteList, setNoteList] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await getNotes();
      if (!fetchedNotes) {
        return;
      }
      setNoteList([...fetchedNotes]);
    };
    fetchNotes();
  }, [isFocused]);
  return (
    <View style={{ padding: 20 }}>
      {noteList.length ? (
        <FlatList
          data={noteList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text
              onPress={() => navigation.navigate("Details", { id: item.id })}
              style={{
                backgroundColor: "#f9c2ff",
                padding: 20,
                marginVertical: 8,
              }}
            >
              {item.title}
            </Text>
          )}
        />
      ) : (
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          {"You have nothing to do for today. Enjoy!"}
        </Text>
      )}
    </View>
  );
};
