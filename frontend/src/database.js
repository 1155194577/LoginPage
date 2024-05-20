import { useQuery } from 'react-query';
import axios from 'axios';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DataFormatting() {
   const {isLoading,error,data} = useQuery('datakey',()=>{
        return axios.get("http://localhost:5001/api")
      });
      console.log(isLoading)
      if(isLoading){
        return <div>loading</div>
      }
      if (error){
        return <div>error!!</div>
      }

      console.log(data);
      const rows = data["data"];
// const rows = [ { key: 7, user_name: 'admin', user_password: 'admin' } ]
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">User Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.user_key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.user_id}
              </TableCell>
              <TableCell align="right">{row.user_name}</TableCell>
              <TableCell align="right">{row.user_password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );


}