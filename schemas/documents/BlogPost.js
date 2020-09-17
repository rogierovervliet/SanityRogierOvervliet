export default {
  name: "BlogPost",
  title: "BlogPost",
  type: "document",
  fields: [
    {
      name: "titel",
      title: "titel",
      type: "localeString",
    },
    {
      name: "Datum",
      title: "Datum",
      type: "date",
    },
    {
      name: "Afbeelding",
      title: "Afbeelding",
      type: "image",
    },
    {
      name: "tekst",
      title: "tekst",
      type: "localeBlock",
    },
  ],
};
