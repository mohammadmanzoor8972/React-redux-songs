//Action Creator
export const selectSongs = song => {
  return {
    type: "SONGS_SELECTED",
    payload: song
  };
};
