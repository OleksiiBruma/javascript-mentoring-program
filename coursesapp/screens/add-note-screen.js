import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { saveNote } from "../notes-service";
export const AddNoteScreen = ({ navigation }) => {
  const [form, changeFormText] = useState({
    title: "",
    description: "",
  });
  const onChangeTitle = (value) => {
    changeFormText({ ...form, title: value });
  };
  const onChangeDescription = (value) => {
    changeFormText({ ...form, description: value });
  };
  const isSubmitAvailable = form.title && form.description;
  const handleSubmit = async () => {
    await saveNote(form);
    navigation.goBack();
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <View>
        <View>
          <TextInput
            style={{
              borderColor: "gray",
              borderWidth: 1,
              padding: 5,
              fontSize: 20,
            }}
            onChangeText={onChangeTitle}
            value={form.title}
            placeholder={"Note title"}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={{
              borderColor: "black",
              minHeight: 200,
              borderWidth: 1,
              padding: 5,
              fontSize: 20,
            }}
            onChangeText={onChangeDescription}
            value={form.description}
            placeholder={"Description"}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            onPress={handleSubmit}
            title="Save"
            disabled={!isSubmitAvailable}
          />
        </View>
      </View>
    </View>
  );
};
