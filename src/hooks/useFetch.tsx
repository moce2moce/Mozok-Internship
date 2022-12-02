import { useEffect, useState } from "react";
import { QuoteType } from "../interfaces/interfaces";

const useFetch = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [genders, setGenders] = useState<QuoteType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    const ids = await (await fetch("https://zenquotes.io/api/quotes")).json();
    const data = Promise.all(
      ids.map(
        async (i: any, idx: any) =>
          await (
            await fetch(`https://jsonplaceholder.typicode.com/posts/${idx + 1}`)
          ).json()
      )
    );
    return [setGenders(await data), setQuotes(ids)];
  }

  useEffect(() => {
    getData().finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setQuotes(
      quotes.map((el, idx) => {
        return { ...el, title: genders[idx].title };
      })
    );
  }, [genders]);
  return { quotes, isLoading };
};

export default useFetch;
