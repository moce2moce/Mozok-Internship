import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { QuoteType } from "../interfaces/interfaces";
interface Props {}


const Quote: React.FC<Props> = (props) => {
 
const {quotes,isLoading} = useFetch()

          

  return isLoading  ? (<p>LOADING...</p> ) : ( 
    <div className="Quote">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Quote</TableCell>
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">Gender</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {quotes.map((el:any,idx:any) => (
              <TableRow
                key={`quotes-${idx}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">{el.c}</TableCell>
                <TableCell align="left">{el.q}</TableCell>
                <TableCell align="left">{el.a}</TableCell>
               {/* <TableCell  align="left">{quoteList.length <= 0 ?  'Loading' : el.title == idx + 1 ? "ZHENSKO":"MASHKO" } </TableCell> */}
               <TableCell align="left">{el.title}</TableCell>
                 
              </TableRow>
           ))} 
          </TableBody>
        </Table>
      </TableContainer>
      <Button sx={{margin:"40px"}} variant="outlined"><Link to={'/random-quote'} style={{textDecoration:"none"}} >Get a random quote</Link> </Button>
    </div>
  )
};

export default Quote;
