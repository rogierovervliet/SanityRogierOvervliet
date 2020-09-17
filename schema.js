import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import eigenschappen from "./schemas/arrays/eigenschappen";
import referenties from "./schemas/arrays/referenties";
import About from "./schemas/documents/About";
import BlogPost from "./schemas/documents/BlogPost";
import Contact from "./schemas/documents/Contact";
import Home from "./schemas/documents/Home";
import Service from "./schemas/documents/Service";
import eigenschap from "./schemas/objects/eigenschap";
import referentie from "./schemas/objects/referentie";
import localeBlock from "./schemas/types/localeBlock";
import localeString from "./schemas/types/localeString";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    localeString,
    localeBlock,
    eigenschappen,
    eigenschap,
    Home,
    BlogPost,
    Contact,
    About,
    referenties,
    Service,
    referentie,
  ]),
});
