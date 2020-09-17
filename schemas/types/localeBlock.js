const supportedLanguages = [
  { id: "nl", title: "Dutch", isDefault: true },
  { id: "en", title: "English" },
];

export default {
  name: "localeBlock",
  type: "object",

  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    fieldset: lang.isDefault ? null : "translations",
    type: "array",
    of: [{ type: "block" }],
  })),
};
