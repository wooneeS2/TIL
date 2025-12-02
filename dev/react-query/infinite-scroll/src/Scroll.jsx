import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import Planets from "./Planets";

function Scroll() {
  const initialUrl = "https://swapi.dev/api/planets/";

  const getPlanetsInfo = async url => {
    const response = await axios.get(url);

    return response.data;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery(
    "sw-planets",
    ({ pageParam = initialUrl }) => getPlanetsInfo(pageParam),
    { getNextPageParam: lastPage => lastPage.next || undefined }
  );

  if (isLoading) return <div>is Loading ... </div>;
  if (isError)
    return (
      <div>
        is Error ... <p>{error.toString()}</p>{" "}
      </div>
    );

  return (
    <>
      {isFetching && <div>Loading ... </div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map(pageData => {
          return pageData.results.map(planets => {
            return (
              <Planets
                key={planets.name}
                name={planets.name}
                rotation_period={planets.rotation_period}
                terrain={planets.terrain}
                population={planets.population}
                gravity={planets.gravity}
              />
            );
          });
        })}
      </InfiniteScroll>
    </>
  );
}

export default Scroll;
