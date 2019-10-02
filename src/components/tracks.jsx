import React, { Component } from "react";
import TracksTable from "./tracksTable";
import SearchBox from "./searchBox";
import auth from "../services/authService";
import { searchTracks } from "../services/trackService";

class Tracks extends Component {
  state = { tracks: [], searchQuery: "some" };

  async componentDidMount() {
    let hashParams = auth.hashParams();
    const accessToken = hashParams.access_token;

    if (!accessToken) {
      await auth.authenticate();
    } else {
      this.setState({ accessToken });
      const { searchQuery } = this.state;
      if (searchQuery) {
        const { data: tracks } = await searchTracks(searchQuery, accessToken);
        this.setState({ tracks });
      } else {
        this.setState({ tracks: [] });
      }
    }
  }

  handleSearch = async query => {
    this.setState({ searchQuery: query });
    if (query) {
      const { data: tracks } = await searchTracks(
        query,
        this.state.accessToken
      );
      this.setState({ tracks });
    } else {
      this.setState({ tracks: [] });
    }
    console.log("q " + query);
    console.log("c " + this.state.tracks.length);
  };

  render() {
    const { tracks, searchQuery } = this.state;
    const count = tracks.length;

    return (
      <div>
        {count === 0 ? (
          <p>There are no tracks to show.</p>
        ) : (
          <p>Showing {count} tracks.</p>
        )}
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <TracksTable
          tracks={tracks && tracks.tracks ? tracks.tracks.items : []}
        />
      </div>
    );
  }
}

export default Tracks;
