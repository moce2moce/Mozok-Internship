import { useEffect, useState } from "react";
import { QuoteType } from "../interfaces/interfaces";

const useFetch = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(10);
  const initialPosts = quotes.slice(0, index);

  async function getData() {
    setIsLoading(true);
    const ids = await (await fetch("https://zenquotes.io/api/quotes")).json();
    const data = Promise.all(
      ids.map(
        async (el: QuoteType) =>
          await (
            await fetch(`https://api.genderize.io/?name=${el.a.split(" ")[0]}`)
          ).json()
      )
    );
    const data2 = await data;
    setQuotes(
      ids.map((el: QuoteType, idx: number) => {
        return { ...el, gender: data2[idx].gender };
      })
    );
    setIsLoading(false);
  }
// This function is for loading 10 quotes on every click. It`s not required for this coding challenge.  
  const loadMore = () => {
    setIndex(index + 10);
    if (index >= quotes.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, isCompleted, loadMore, initialPosts };
};

export default useFetch;
