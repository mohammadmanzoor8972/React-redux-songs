import React from "react";
import { connect } from "react-redux";
import { selectSongs } from "../actions";

class SongList extends React.Component {
  render() {
    const { songs } = this.props;
    return (
      <div className="songList">
        <div>Song List</div>
        <ul>
          {songs.map(item => (
            <li key={item.title}>
              {item.title}{" "}
              <button onClick={() => this.props.selectSongs(item)}>
                select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    songs: state.songs
  };
};

const mapDispatchToProps = (state, props) => {
  return {
    selectSongsd: (dispatchEvent = () => selectSongs)
  };
};

export default connect(
  mapStateToProps,
  { selectSongs }
)(SongList);
