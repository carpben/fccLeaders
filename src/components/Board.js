import React, { Component } from 'react';
import TableRow from './TableRow'

const Board = ({boardData}) => (
  <table>
    <thead>
      <tr>
         <th>#</th>
         <th>Name</th>
         <th>30 Days</th>
         <th>All Times</th>
      </tr>
    </thead>
    <tbody>
    {
      boardData.map( (userObj, index) => <TableRow index={index} {...userObj}  />  )
   }
    </tbody>
  </table >
)

export default Board
