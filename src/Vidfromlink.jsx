const GetVidFromId = (url) => {
  const id = url.split("/")[3];
  const embed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  return embed;
};

export default GetVidFromId;
