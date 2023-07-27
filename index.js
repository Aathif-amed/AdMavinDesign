let data = [
  {
    title: "TRUSTED DATA SOURCES",
    desc: `Get - "Up to Date" location specific data and analytics
    for more than 700 cities and towns across India,
    including real time Traffic, Demographics and
    Population spread data.`,
  },
  {
    title: "ROBUST VERIFIED ALGORITHMS",
    desc: `We constantly enhance our Algorithms and verify
    them through our collaboration with India's premier
    Technology Institutions like IIT Madras and other
    Industry sources.`,
  },
  {
    title: "END TO END WORKFLOWS",
    desc: `Proprietary or Confidential data? You can upload your
    media and data layers in your own secure server
    under a white-labeled Application.`,
  },
  {
    title: "MAPS IMAGES & SCORECARDS",
    desc: `Clients love visuals. Our Tools provide automated
    and customizable visualization for your presentations
    and reports.`,
  },
  {
    title: "END TO END WORKFLOWS",
    desc: `Analyze Geographies - Plan OOH Campaigns -
    Contact Media Owners - Setup and Monitor
    Campaigns. All on a Single Platform.`,
  },
  {
    title: "SUPPORT",
    desc: `Learning to adapt, to data driven media markets? We
    support you in this journey and walk you through the
    data.`,
  },
];

function foo() {
  console.log("in");
  alert("clicked");
}
function show() {
  let readMore = document.getElementById("readMoreNews");
  readMore.classList.toggle("newsPara");
}
function getData(num) {
  let whyAdMavinTitle = document.getElementById("whyAdMavinTitle");
  whyAdMavinTitle.innerHTML = data[num].title;
  console.log(data[num].title);
  let whyAdMavinDescription = document.getElementById("whyAdMavinDescription");
  whyAdMavinDescription.innerHTML = data[num].desc;
  let removeactiveButton = document.querySelector(".btn-active");

  // to remove previous active button styles
  if (removeactiveButton != null) {
    console.log(removeactiveButton.classList);
    removeactiveButton.classList.remove("btn-active");
  }
  // to add active button styles
  let activeButton = document.getElementById(`btn${num}`);
  activeButton.classList.add("btn-active");
}
getData(0);
