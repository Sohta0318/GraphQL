import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/fetchSongs.js'

const SongList = (props) => {
  if (props.data.loading) return <div>Loading...</div>
  const onSongDelete = (id) => {
    props
      .mutate({
        variables: {
          id,
        },
      })
      .then(props.data.refetch())
  }
  const renderSongs = () => {
    return props.data.songs.map(({ id, title }) => {
      return (
        <li key={id}>
          <Link to={`/songs/${id}`}> {title}</Link>
          <i
            className="material-icons right"
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
