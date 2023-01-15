import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/fetchSong.js'

const SongList = (props) => {
  if (props.data.loading) return <div>Loading...</div>
  const renderSongs = () => {
    return props.data.songs.map((song) => {
      return <li key={song.id}>{song.title}</li>
    })
  }
  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  )
}

export default graphql(query)(SongList)
