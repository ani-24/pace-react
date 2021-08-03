function getIdByUrl(url) {
  let id = url.split("/");
  let imgUrl = `https://i.ytimg.com/vi/${id[3]}/hqdefault.jpg`;
  return imgUrl;
}

const VideoData = [
  {
    link: "https://youtu.be/jFFEeyJ1iXI",
    desc: "Complete personality development at PACE Institute",
  },
  {
    link: "https://youtu.be/K1USSRBF2_8",
    desc: "Develop a concept of grammar at PACE Institute",
  },
];

VideoData.forEach((vid) => {
  vid.poster = getIdByUrl(vid.link);
});

export default VideoData;
