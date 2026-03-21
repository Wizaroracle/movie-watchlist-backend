import { prisma } from "../config/db";

const addToWatchList = async (req, res) => {
  const { movieId, status, rating, notes } = req.body;

  //Veriy movie exists
  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });

  if (!movie) {
    res.status(404).json({
      error: "Movie not found",
    });
  }

  //Check if already added
  const existingInWatch = await prisma.watchlistItem.findUnique({
    where: { id: movieId },
  });
};

export { addToWatchList };
