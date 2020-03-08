import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  render() {
    return (
      <div className="songDetail">
        <h3>Song Details</h3>
        <div>
          <p>
            Song Name -{" "}
            {this.props.selectedSong && this.props.selectedSong.title}
          </p>
          <p>
            Duration -{" "}
            {this.props.selectedSong && this.props.selectedSong.duration}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong || {}
  };
};
export default connect(mapStateToProps)(SongDetail);
