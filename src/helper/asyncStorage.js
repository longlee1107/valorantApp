import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async (payload) => {
  try {
    const jsonValue = (await AsyncStorage.getItem(payload)) || "";
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.log(e);
  }
};

const setData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch(e) {
        console.log(e);
    }
    console.log('asyncStorage Done')
  }

const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
        console.log(e);
    }
    console.log('asyncStorage Done')
  }

export const asyncStorage = {
  getData,
  setData,
  removeData
};
