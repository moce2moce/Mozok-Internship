import { Box, Button, CircularProgress, Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

interface Props {}

const Quote: React.FC<Props> = (props) => {
  const { isLoading, isCompleted, loadMore, initialPosts } = useFetch();

  return isLoading ? (
    <Box className="loadingDiv">
      {" "}
      <CircularProgress color="primary" />
      <h3>Loading...</h3>
    </Box>
  ) : (
    <Container fixed className="Quote">
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
            {initialPosts.map((el: any, idx: any) => (
              <TableRow
                key={`quotes-${idx}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {el.c}
                </TableCell>
                <TableCell align="left">{el.q}</TableCell>
                <TableCell align="left">Author:{el.a}</TableCell>
                <TableCell align="left">
                  {el.gender === "male"
                    ? "👨"
                    : el.gender === "female"
                    ? "👩"
                    : "💗"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isCompleted ? (
        <Button
          color="primary"
          variant="contained"
          onClick={loadMore}
          type="button"
          className="disabled"
        >
          That's It
        </Button>
      ) : (
        <Button
          color="primary"
          variant="contained"
          onClick={loadMore}
          type="button"
        >
          Load 10 More Quotes
        </Button>
      )}
      <Button sx={{ margin: "40px" }} color="primary" variant="contained">
        <Link
          to={"/random-quote"}
          style={{ textDecoration: "none", color: "white" }}
        >
          Get a random quote
        </Link>{" "}
      </Button>
    </Container>
  );
};

export default Quote;
