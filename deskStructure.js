import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .child(
          S.document().title("Home").schemaType("Home").documentId("Home")
        ),
      S.listItem()
        .title("Service")
        .child(
          S.document()
            .title("Service")
            .schemaType("Service")
            .documentId("Service")
        ),
      S.listItem()
        .title("Over mij en visie")
        .child(
          S.document()
            .title("Over mij en visie")
            .schemaType("About")
            .documentId("About")
        ),
      S.listItem()
        .title("Contact")
        .child(
          S.document()
            .title("Contact")
            .schemaType("Contact")
            .documentId("Contact")
        ),
      S.documentTypeListItem("BlogPost"),
    ]);
