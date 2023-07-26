const replace = ({ title, description, image, card, url, type }) => {
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", description);

  // open graph meta tags
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", title);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", description);
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute("content", image);
  document
    .querySelector('meta[property="og:url"]')
    .setAttribute("content", url);
  document
    .querySelector('meta[property="og:type"]')
    .setAttribute("content", type);

  // Twitter card meta tags
  document
    .querySelector('meta[name="twitter:card"]')
    .setAttribute("content", card);
  document
    .querySelector('meta[name="twitter:title"]')
    .setAttribute("content", title);
  document
    .querySelector('meta[name="twitter:description"]')
    .setAttribute("content", description);
  document
    .querySelector('meta[name="twitter:image"]')
    .setAttribute("content", image);
};

export default replace;
