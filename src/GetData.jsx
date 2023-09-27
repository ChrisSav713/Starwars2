import React from 'react'
import GetName from '../src/GetName'
import axios from 'axios'
import useAxios from '../src/useAxios'

function GetData() {
  const url = 'https://swapi.dev/api/people/'
  const [response, error, loading] = useAxios(url)

  return (
    <div>
      <table>
        <tr>
          <th>key</th>
          <th>value</th>
        </tr>
        <tbody>
          {Object.entries(response).map(([k, v]) => {
            return Array.isArray(v) ? (
              <>
                {Object.entries(v).map((k2, v2) => {
                  return (
                    <tr>
                      <td>{k2[0] === 0 && k}</td>
                      <td>
                        {k2[1].includes('http') ? (
                          <GetName url={k2[1]} />
                        ) : (
                          k2[1]
                        )}
                      </td>
                    </tr>
                  )
                })}
              </>
            ) : (
              <>
                <tr>
                  <td>{k}</td>
                  {typeof v === 'string' || v instanceof String ? (
                    <td>{v.includes('http') ? <GetName url={v} /> : v} </td>
                  ) : (
                    <td>{v}</td>
                  )}
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default GetData
