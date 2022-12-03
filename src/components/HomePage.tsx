import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const HomePage: React.FC<Props> = (props) => {
  return (
    <div className="HomePage">
      <Button sx={{ margin: "40px" }} color="primary" variant="contained">
        <Link to={"/quote"} style={{ textDecoration: "none", color: "white" }}>
          Go to Quote Page
        </Link>
      </Button>
    </div>
  );
};

export default HomePage;
