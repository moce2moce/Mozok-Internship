import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QuoteType } from "../interfaces/interfaces";

interface Props {}

const RandomQuote: React.FC<Props> = (props) => {
    
  const [randomQuote, setRandomQuote] = useState<QuoteType[]>([]);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => setRandomQuote(data));
  }, [toggler]);

  return (
    <Container
      fixed
      className="RandomQuote"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {randomQuote.map((el, idx) => {
        return (
          <Box key={idx}>
            <blockquote>
              <span style={{ fontWeight: "bolder" }}>Quote : </span>
              {el.q}
            </blockquote>
            <footer>
              <span style={{ fontWeight: "bolder" }}>Author : </span> {el.a}
            </footer>
          </Box>
        );
      })}
      <Box>
        <Button sx={{ margin: "40px" }} variant="contained">
          <Link
            to={"/quote"}
            style={{ textDecoration: "none", color: "white " }}
          >
            Back to List of quotes
          </Link>{" "}
        </Button>
        <Button
          sx={{ margin: "40px" }}
          variant="contained"
          onClick={() => setToggler(!toggler)}
        >
          Generate Random Quote
        </Button>
      </Box>
    </Container>
  );
};

export default RandomQuote;
