const seriesCollection = [
  {
    name: "You",
    director: ["Greg Berlanti", "Sera Gamble"],
    releaseYear: 2018,
    picture: "images/p14418847_b_h8_aj.jpg",
    link: "https://www.youtube.com/watch?v=ga1m0wjzscU",
    genre: "Psychological thriller",
    cast: [
      "Penn Badgley",
      "Victoria Pedretti",
      "Shay Mitchell",
      "Jenna Ortega",
    ],
  },
  {
    name: "Why women kill",
    director: "Marc Cherry",
    releaseYear: 2019,
    picture: "images/whywomenkill.jpg",
    link: "https://www.youtube.com/watch?v=yynQ98otI-s",
    genre: ["Black comedy", "Anthology"],
    cast: ["Ginnifer Goodwin", "Sam Jaeger", "Lucy Liu", "Alexandra Daddario"],
  },
  {
    name: "Resident Alien",
    director: "Chris Sheridan",
    releaseYear: 2021,
    picture: "images/p19132606_b_h8_aa.jpg",
    link: "https://www.youtube.com/watch?v=T4J7QjGNTs4",
    genre: ["Comedy drama", "Science fiction"],
    cast: ["Alan Tudyk", "Sara Tomko", "Corey Reynolds", "Alice Wetterlund"],
  },
  {
    name: "Scream Queens",
    director: ["Robert M. Williams Jr.", "Barry M. Berg"],
    releaseYear: 2015,
    picture: "images/scream-queens-mktg-hed-2015.jpg",
    link: "https://www.youtube.com/watch?v=i6_LwI-hUms",
    genre: ["Comedy horror", "Black comedy"],
    cast: ["Emma Roberts", " Nick Jonas", "Jamie Lee Curtis", "Ariana Grande"],
  },
  {
    name: "Supernatural",
    director: "Eric Kripke",
    releaseYear: 2005,
    picture: "images/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=t-775JyzDTk",
    genre: ["Adventure", "Fantasy"],
    cast: [
      "Jared Padalecki",
      "Jensen Ackles",
      "Misha Collins",
      "Mark A. Sheppard",
    ],
  },
  {
    name: "The Great",
    director: "Tony McNamara",
    releaseYear: 2020,
    picture: "images/The-Great-season-3-renewal-1024x576.jpg",
    link: "https://www.youtube.com/watch?v=1sMrtt7sAR8",
    genre: ["Dark comedy", "Satire"],
    cast: ["Elle Fanning", "Nicholas Hoult", "Phoebe Fox", "Charity Wakefield"],
  },
  {
    name: "The Crowded Room",
    director: "Akiva Goldsman",
    releaseYear: 2023,
    picture: "images/The_Crowded_Room_title_card.jpeg",
    link: "https://www.youtube.com/watch?v=4w1xZA7pX2c",
    genre: ["Drama", "Psychological thriller"],
    cast: ["Tom Holland", "Amanda Seyfried", "Sasha Lane", "Will Chase"],
  },
  {
    name: "Midnight Mass",
    director: "Mike Flanagan",
    releaseYear: 2021,
    picture: "images/midnight-mass.png",
    link: "https://www.youtube.com/watch?v=89UV8vmWXlY",
    genre: "Supernatural horror",
    cast: [
      "Kate Siegel ",
      "Hamish Linklater",
      "Zach Gilford",
      "Kristin Lehman",
    ],
  },
  {
    name: "American Horror Story",
    director: "Ryan Murphy",
    releaseYear: 2011,
    picture: "images/american-horror-story-1.png",
    link: "https://www.youtube.com/watch?v=reP8VFF3KHU&t=3s",
    genre: ["Anthology", "Horror"],
    cast: ["Sarah Paulson", "Evan Peters", "Emma Roberts", "Taissa Farmiga"],
  },
];

const topContainer = document.createElement("div");
topContainer.id = "topContainer";
document.body.appendChild(topContainer);

const logo = document.createElement("div");
logo.id = "logo";
document.body.insertBefore(logo, document.body.firstChild);

const heading = document.createElement("h1");
heading.textContent = "Wonderful collection of series created by Yulia";
topContainer.appendChild(heading);

const paragraph = document.createElement("p");
paragraph.textContent =
  "Here you can see some interesting examples of series. But be careful, my taste is a little bit crazy.";
topContainer.appendChild(paragraph);

document.body.insertBefore(
  topContainer,
  document.getElementById("seriesContainer")
);

document.addEventListener("DOMContentLoaded", function () {
  const seriesContainer = document.getElementById("seriesContainer");

  seriesCollection.forEach((series) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const picture = document.createElement("img");
    picture.src = series.picture;
    picture.alt = series.name;
    card.appendChild(picture);

    const details = document.createElement("div");
    details.classList.add("details");

    const title = document.createElement("h2");
    title.textContent = series.name;
    details.appendChild(title);

    const director = document.createElement("p");
    director.textContent = `Director: ${
      Array.isArray(series.director)
        ? series.director.join(", ")
        : series.director
    }`;
    details.appendChild(director);

    const releaseYear = document.createElement("p");
    releaseYear.textContent = `Release Year: ${series.releaseYear}`;
    details.appendChild(releaseYear);

    const genre = document.createElement("p");
    genre.textContent = `Genre: ${
      Array.isArray(series.genre) ? series.genre.join(", ") : series.genre
    }`;
    details.appendChild(genre);

    const cast = document.createElement("p");
    cast.textContent = `Cast: ${series.cast.join(", ")}`;
    details.appendChild(cast);

    const youtubeLink = document.createElement("a");
    youtubeLink.id = "youtube";
    youtubeLink.href = series.link;
    youtubeLink.target = "_blank";
    youtubeLink.classList.add("fa", "fa-youtube");
    youtubeLink.innerHTML = '<i class="fa fa-youtube-play"></i>'; // Add YouTube icon directly to the link
    youtubeLink.style.color = "red";
    details.appendChild(youtubeLink);
    card.appendChild(details);
    seriesContainer.appendChild(card);
  });
});
