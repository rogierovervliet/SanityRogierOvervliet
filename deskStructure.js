import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Items")
        .child(
          S.list()
            .title("Items")
            .items([
              S.listItem()
                .title(`Item`)
                .child(
                  S.document()
                    .title("Item")
                    .schemaType("newD")
                    .documentId("newD")
                )
            ])
        )
    ]);
