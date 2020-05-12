import { AsyncStorage } from "react-native";
const keyForNotes = "notes7";
export const getNotes = async () => {
  try {
    const JSONvalue = await AsyncStorage.getItem(keyForNotes);
    return JSONvalue != null ? JSON.parse(JSONvalue) : [];
  } catch (e) {
    alert(e);
  }
};
export const saveNote = async (newData) => {
  try {
    const oldData = await getNotes();
    const dataToSave = [{ ...newData, id: new Date() }, ...oldData];
    const jsonToSave = JSON.stringify(dataToSave);
    await AsyncStorage.setItem(keyForNotes, jsonToSave);
  } catch (e) {}
};
export const getNoteById = async (id) => {
  try {
    const JSONvalue = await AsyncStorage.getItem(keyForNotes);
    const value = JSONvalue != null ? JSON.parse(JSONvalue) : [];
    return value.filter((item) => item.id === id)[0];
  } catch (e) {}
};
