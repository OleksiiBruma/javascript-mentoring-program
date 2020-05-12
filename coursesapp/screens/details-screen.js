import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getNoteById } from "../notes-service";
export const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [note, setNote] = useState({ title: "", description: "" });
  useEffect(() => {
    const fetchNote = async () => {
      const fetchedNote = await getNoteById(id);
      if (!fetchedNote) {
        return;
      }
      setNote(fetchedNote);
    };
    fetchNote();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <View>
        <Text style={{ fontSize: 32 }}>{note.title}</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>{note.description}</Text>
      </View>
    </View>
  );
};
