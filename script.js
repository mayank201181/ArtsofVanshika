const artworks = [
  {
    title: "Smiling Character",
    date: "May 2026",
    image: "assets/artwork/smiling-character.jpg",
    alt: "A smiling character drawn in black marker on lined paper"
  },
  {
    title: "Playful Creature",
    date: "May 2026",
    image: "assets/artwork/playful-creature.jpg",
    alt: "A playful creature drawn in black marker on lined paper"
  },
  {
    title: "Brown Character",
    date: "May 2026",
    image: "assets/artwork/brown-character.jpg",
    alt: "A brown rounded character with black hair-like strokes"
  },
  {
    title: "Red Eye Drawing",
    date: "May 2026",
    image: "assets/artwork/red-eye-drawing.jpg",
    alt: "A red shaded eye drawing with long black lashes"
  }
];

const galleryGrid = document.querySelector("#galleryGrid");
const dialog = document.querySelector("#artDialog");
const dialogImage = document.querySelector("#dialogImage");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogMeta = document.querySelector("#dialogMeta");
const closeDialog = document.querySelector("#closeDialog");

function openArtwork(artwork) {
  dialogImage.src = artwork.image;
  dialogImage.alt = artwork.alt;
  dialogTitle.textContent = artwork.title;
  dialogMeta.textContent = artwork.date;
  dialog.showModal();
}

artworks.forEach((artwork) => {
  const card = document.createElement("button");
  card.className = "art-card";
  card.type = "button";
  card.innerHTML = `
    <img src="${artwork.image}" alt="${artwork.alt}">
    <span>
      <h3>${artwork.title}</h3>
      <p>${artwork.date}</p>
    </span>
  `;
  card.addEventListener("click", () => openArtwork(artwork));
  galleryGrid.append(card);
});

closeDialog.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
