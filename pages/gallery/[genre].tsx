import React from "react";

const GalleryGenrePage = ({ genre }) => {
  return (
    <div>
      <h1>{genre} page</h1>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const genre = params.genre;

  return {
    props: {
      genre,
    },
  };
};

export const getStaticPaths = async () => {
  const genres = ["comp-art", "portraits", "shamans"];
  const pathsWithParams = genres.map((genre) => ({ params: { genre } }));
  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

export default GalleryGenrePage;
