import axios from 'axios'
import React, { useState, useEffect } from 'react'

const useAxios = (url) => {
  console.log(url)
  const [response, setResponse] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchData() {
      try {
        console.log('Effect ' + url)
        const res = await axios.get(url)
        console.log(res.data.name)
        setResponse(res.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()
  }, [url])

  return [response, error, loading]
}

export default useAxios
