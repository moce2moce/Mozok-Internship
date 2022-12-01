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
import { QuoteType } from "../interfaces/interfaces";
interface Props {}


const Quote: React.FC<Props> = (props) => {
    
    const [quotes, setQuotes] = useState<QuoteType[]>([])
    const [newRowArr, setNewRowArr] = useState<any>([])
    const [myNum, setMyNum] = useState<any[]>([])

    useEffect(() => {
        fetch("https://zenquotes.io/api/quotes")
        .then(res=> res.json())
        .then(data=>setQuotes(data))
    }, [])
   
    useEffect(() => {
            let genderArr = quotes.map((el,idx)=>{
                let first = el.a.split(" ")[0]                
                fetch(`https://jsonplaceholder.typicode.com/posts/${idx + 1}`)
                .then(res=> res.json())
                .then(data=> myNum.push(data.id))
              return {...el,id:myNum[idx]}
            })
            setNewRowArr(genderArr)
    }, [quotes])

  return (
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
            {newRowArr.map((el:any,idx:any) => (
              <TableRow
                key={`quotes-${idx}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">{el.c}</TableCell>
                <TableCell align="left">{el.q}</TableCell>
                <TableCell align="left">{el.a}</TableCell>
                <TableCell  align="left">{el.id > 20 ? `👩` :`👴`} </TableCell>
                 
              </TableRow>
           ))} 
          </TableBody>
        </Table>
      </TableContainer>
      <Button sx={{margin:"40px"}} variant="outlined"><Link to={'/random-quote'} style={{textDecoration:"none"}} >Get a random quote</Link> </Button>
    </div>
  );
};

export default Quote;
