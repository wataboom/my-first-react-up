import React from 'react'
import { Button } from './Button'
let checklogs = []
const Passed = logs => {
    checklogs = logs
    console.log(checklogs)
}
const TableBodyCell = (props) => (
  <td style={{ padding: '5px 10px', border: 'solid 1px #ccc' }}>
    {props.children}
  </td>
)
const TableHeaderCell = (props) => (
  <th
    style={{
      padding: '5px 10px',
      border: 'solid 1px #ccc',
      backgroundColor: '#ddd',
    }}
  >
    {props.children}
  </th>
)
const LogsTable = ({
  logs
}) => {
  return (
    <div>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          border: 'solid 1px #ccc',
        }}
      >
        <thead>
          <tr>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>NAME</TableHeaderCell>
            <TableHeaderCell>ACTION</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {logs.length ? (
            logs.map((s) => (
              <tr key={s.id}>
                <TableBodyCell>{s.id}</TableBodyCell>
                <TableBodyCell>{s.name}</TableBodyCell>
                <TableBodyCell>
                  {s.currentTime}
                </TableBodyCell>
              </tr>
            ))
          ) : (
            <tr>
              <td>no student</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export {LogsTable, Passed}