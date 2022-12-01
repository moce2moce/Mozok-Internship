import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { QuoteType } from '../interfaces/interfaces';

interface Props {}

const RandomQuote: React.FC<Props> = (props) => {

    const [randomQuote, setRandomQuote] = useState<QuoteType[]>([])
    const [toggler, setToggler] = useState(false)


    useEffect(() => {
      fetch("https://zenquotes.io/api/random")
      .then(res=>res.json())
      .then(data=> setRandomQuote(data))

    }, [toggler])
    




    return (
        <div className="RandomQuote" style={{height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center"}}>
          
                {randomQuote.map((el,idx)=>{
                    return (
                    <div key={idx}>
                    
                        <blockquote>{el.q}</blockquote>
                        <footer>{el.a}</footer>
                    
                    </div>)
                })}
                <div>
                    <Button sx={{margin:"40px"}} variant="outlined"><Link to={'/quote'} style={{textDecoration:"none"}} >Back to List of quotes</Link> </Button>
                     <Button sx={{margin:"40px"}} variant="outlined" onClick={()=>setToggler(!toggler)}>Generate Random Quote</Button>
                </div>
  
             
        </div>
    );
};

export default RandomQuote;