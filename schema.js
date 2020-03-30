import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import newA from "./schemas/arrays/newA";
import newD from "./schemas/documents/newD";
import newO from "./schemas/objects/newO";
import localeBlock from "./schemas/types/localeBlock";
import localeString from "./schemas/types/localeString";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([localeString, localeBlock, newA, newO, newD])
});
