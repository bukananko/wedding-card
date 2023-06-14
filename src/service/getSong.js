const getSong = async (callback) => {
  const endpoint = `https://pipedapi.kavin.rocks/streams/9GiWftsHdBs`;
  const response = await fetch(endpoint);
  const { audioStreams } = await response.json();

  const song = audioStreams[0].url;
  callback(song);
};

export default getSong;
