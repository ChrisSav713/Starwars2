import React from 'react'
import axios from 'axios'
import useAxios from '../src/useAxios'

function GetName(props) {
  const { url } = props
  const [response, error, loading] = useAxios(url)

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading &&
        !error &&
        response &&
        (url.includes('films') ? (
          <a href={url}>{response.title}</a>
        ) : (
          <a href={url}>{response.name}</a>
        ))}
      {!loading && !error && !response && <p>Empty</p>}
    </>
  )
}

export default GetName
