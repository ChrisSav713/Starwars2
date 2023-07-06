import React from 'react'
import GetName from '../src/GetName'

function GetData() {
  return (
    <div>
      <table>
<tr>
  <th>key</th>
  <th>value</th>
</tr>
<tbody>
  {Object.entries(datalist).map(([k, v]) => {
    return Array.isArray(v) ? (
      <>
        {Object.entries(v).map((k2, v2) => {
          return (
            <tr>
              <td>{k2[0] == 0 && k}</td>
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
