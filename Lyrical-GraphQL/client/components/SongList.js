import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/fetchSong.js'

const SongList = (props) => {
  if (props.data.loading) return <div>Loading...</div>
  const onSongDelete = (id) => {
    props.mutate({
      variables: {
        id,
      },
      fetchQueries: { query },
    })
  }
  const renderSongs = () => {
    return props.data.songs.map(({ id, title }) => {
      return (
        <li key={id}>
          {title}
          <i
            className="material-icons"
            onClick={() => {
              onSongDelete(id)
            }}
          >
            delete
          </i>
        </li>
      )
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

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`

export default graphql(mutation)(graphql(query)(SongList))
