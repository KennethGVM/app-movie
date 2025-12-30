import { useEffect, useState, type JSX } from "react";
import {
  Container,
  AvatarContainer,
  Avatar,
  Degrade,
} from "../../styled.components";
import avatar from "../../assets/avatar.png";
import type { Movie } from "../../interfaces/interfaces";


const Carousel = (): JSX.Element => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const url = import.meta.env.VITE_BASE_URL;
      const items = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      });
      const response = await items.json();
      const aItems = response.results.map((item: Movie) => {
        const obj: Movie = {
          title: item.title,
          overview: item.overview,
          poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        };
        return obj;
      });
      console.log(aItems);
      setData(aItems);
    };
    getData();
  }, []);

  return (
    <>
      <Container height={49} src={data[0]?.poster_path} />
      <AvatarContainer height={50}>
        <Avatar height={50} src={avatar} />
      </AvatarContainer>
      <Degrade height={50} />
    </>
  );
};
export default Carousel;
