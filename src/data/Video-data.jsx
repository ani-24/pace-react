const getIdByUrl = (url) => {
  let id = url.split("/")[3];
  let imgUrl = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  return imgUrl;
};

const DemoVideo = [
  {
    link: "https://youtu.be/jFFEeyJ1iXI",
    desc: "Complete personality development at PACE Institute",
  },
  {
    link: "https://youtu.be/K1USSRBF2_8",
    desc: "Develop a concept of grammar at PACE Institute",
  },
];

const GalleryVideo = [
  {
    link: "https://youtu.be/4BQ-pCk-6uU",
    desc: "How to build concentration",
  },
  {
    link: "https://youtu.be/nT9luM21VeE",
    desc: "How to build Vocabulary / Wordpower",
  },
  {
    link: "https://youtu.be/jeVg1K8Md6o",
    desc: "Wordpower and imitation can improve the language",
  },
  {
    link: "https://youtu.be/c-hyQqhWesU",
    desc: "Grammar made easy at PACE Institute",
  },
  {
    link: "https://youtu.be/aoos9QlIQC4",
    desc: "PACE Institute provides environment to develop learning habit",
  },
  {
    link: "https://youtu.be/zqAAroa62n8",
    desc: "PACE helps students to gain self confidence",
  },
  {
    link: "https://youtu.be/asHX1n8ZrVU",
    desc: "Wordpower & Vocabulary for all levels",
  },
  {
    link: "https://youtu.be/JevNb0-O-zk",
    desc: "Grammar classes for all levels",
  },
];

DemoVideo.forEach((vid) => {
  vid.poster = getIdByUrl(vid.link);
});

GalleryVideo.forEach((vid) => {
  vid.poster = getIdByUrl(vid.link);
});

export { DemoVideo, GalleryVideo };
