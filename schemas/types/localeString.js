const supportedLanguages = [
  { id: "en", title: "English", isDefault: true },
  { id: "nl", title: "Dutch" }
];

export default {
  name: "localeString",
  type: "object",

  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: false }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    fieldset: lang.isDefault ? null : "translations",
    type: "string"
  }))
};
