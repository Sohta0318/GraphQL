import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SongList = (props) => {
  if (props.data.loading) return <div>Loading...</div>
  const renderSongs = () => {
    return props.data.songs.map((song) => {
      return <li key={song.id}>{song.title}</li>
    })
  }
  return <ul className="collection">{renderSongs()}</ul>
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default graphql(query)(SongList)
