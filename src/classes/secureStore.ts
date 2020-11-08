import {
  setItemAsync,
  getItemAsync,
  isAvailableAsync,
  deleteItemAsync,
} from "expo-secure-store";

export default class secureStore {
  async checkSecureStore() {
    const state = await isAvailableAsync();

    return state;
  }

  async setItem(key: string, value: string) {
    if (await this.checkSecureStore()) {
      await setItemAsync(key, value);
    }
  }

  async getItem(key: string) {
    if (await this.checkSecureStore()) {
      const value = await getItemAsync(key);
      return value;
    }
  }

  async deleteItem(key: string) {
    if (await this.checkSecureStore()) {
      await deleteItemAsync(key);
    }
  }
}
