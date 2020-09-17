export default {
  name: "Home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "welkomTitel",
      title: "welkomTitel",
      type: "localeString",
    },
    {
      name: "welkomTekst",
      title: "welkomTekst",
      type: "localeString",
    },
    {
      name: "achtergrondAfbeelding",
      title: "achtergrondAfbeelding",
      type: "image",
    },
    {
      name: "quote",
      title: "quote",
      type: "localeBlock",
    },
    {
      name: "referenties",
      title: "referenties",
      type: "referenties",
    },
  ],
};
