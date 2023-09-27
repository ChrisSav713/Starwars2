import React, { useState, useEffect } from 'react'
import GetName from '../src/GetName'
import axios from 'axios'
import useAxios from '../src/useAxios'
import { v4 as uuidv4 } from 'uuid'

const GetPeople = () => {
  var data = [{}]
  const url = 'https://swapi.dev/api/people/1/'
  const [response, error, loading] = useAxios(url)

  const addData = (k, v) => {
    //console.log(`Key: ${k} Value: ${v}`)
    data.push({ [k]: v })
  }

  const handleClick = () => {
    console.log(data)
  }

  const printObject = (obj) => {
    if (obj === null || obj === undefined) return
    Object.entries(obj).forEach(([k, v]) => {
      if (Array.isArray(v)) {
        v.map((item) => {
          addData(k, item)
        })
      } else {
        if (v === null || v === undefined) {
          addData(k, '')
        } else {
          if (typeof v === 'object') {
            printObject(v)
          } else {
            addData(k, v)
          }
        }
      }
    })
  }

  response && printObject(response)

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && !response && <p>No data found</p>}
      {!loading && !error && response && <p>Loaded</p>}
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return Object.entries(item).map(([k, v]) => {
              return (
                <tr key={uuidv4()}>
                  <td>{k}</td>
                  <td>{v}</td>
                </tr>
              )
            })
          })}
        </tbody>
      </table>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default GetPeople
