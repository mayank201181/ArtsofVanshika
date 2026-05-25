# Creations of Vanshika

Repository: `ArtsofVanshika`

A simple static website for collecting Vanshika's artwork over time.

## Add New Artwork

1. Add the image to `assets/artwork/`.
2. Open `script.js`.
3. Add a new item to the `artworks` list with a title, date, image path, and alt text.

## Preview Locally

Run a static server from this folder:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy With GitHub Pages

After the repository is on GitHub:

1. Open the repository settings.
2. Go to **Pages**.
3. Choose **Deploy from a branch**.
4. Select the `main` branch and `/root`.
5. Save the setting.
