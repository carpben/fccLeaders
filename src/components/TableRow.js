import React, { Component } from 'react';

const TableRow = ({index, username, recent, alltime}) => {
   return (
      <tr>
         <td>{index}</td>
         <td>{username}</td>
         <td>{recent}</td>
         <td>{alltime}</td>
      </tr>
   )
}

export default TableRow
