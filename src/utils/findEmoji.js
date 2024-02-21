import { emojiList } from '../database/data';

export const findEmojiFromRelType = (relType) => {
  return emojiList.find((emoji) => emoji.relType === relType);
};

export const findEmojiFromId = (id) => {
  return emojiList.find((emoji) => emoji.id === id);
};
