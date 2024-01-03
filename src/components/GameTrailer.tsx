import useTrailers from "../hooks/useTrailer";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video controls src={first.data[480]} poster={first.preview}></video>
  ) : (
    ""
  );
};

export default GameTrailer;
