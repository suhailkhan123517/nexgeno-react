function generateSchemaMarkup(pageData) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageData.title,
    description: pageData.description,
    image: pageData.imageUrl,
    author: {
      "@type": "Person",
      name: "NexGeno Technology Pvt Ltd",
    },
    publisher: {
      "@type": "Organization",
      name: "NexGeno Technology Pvt Ltd",
      logo: {
        "@type": "ImageObject",
        url: `https://nexgeno.in/${pageData.url}`,
      },
    },
    datePublished: "2023-05-31",
    dateModified: "2023-05-31",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nexgeno.in/${pageData.url}`,
    },
  };

  return schemaMarkup;
}

export default generateSchemaMarkup;
