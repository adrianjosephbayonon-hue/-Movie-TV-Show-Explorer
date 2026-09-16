const WATCHLIST_KEY = "cinevault_watchlist";

export function getWatchlist() {
  try {
    const saved = localStorage.getItem(WATCHLIST_KEY);

    if (!saved) {
      return [];
    }

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to read watchlist:", error);
    return [];
  }
}

export function saveWatchlist(watchlist) {
  try {
    localStorage.setItem(
      WATCHLIST_KEY,
      JSON.stringify(watchlist)
    );
  } catch (error) {
    console.error("Failed to save watchlist:", error);
  }
}

export function isInWatchlist(id, mediaType) {
  const watchlist = getWatchlist();

  return watchlist.some(
    (item) =>
      item.id === id &&
      item.media_type === mediaType
  );
}

export function addToWatchlist(item) {
  const watchlist = getWatchlist();

  const alreadyExists = watchlist.some(
    (savedItem) =>
      savedItem.id === item.id &&
      savedItem.media_type === item.media_type
  );

  if (alreadyExists) {
    return watchlist;
  }

  const updatedWatchlist = [
    ...watchlist,
    item,
  ];

  saveWatchlist(updatedWatchlist);

  return updatedWatchlist;
}

export function removeFromWatchlist(id, mediaType) {
  const watchlist = getWatchlist();

  const updatedWatchlist = watchlist.filter(
    (item) =>
      !(
        item.id === id &&
        item.media_type === mediaType
      )
  );

  saveWatchlist(updatedWatchlist);

  return updatedWatchlist;
}