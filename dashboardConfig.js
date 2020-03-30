import { env } from "./netlify";

export default {
  widgets: [
    {
      name: "project-info"
    },
    {
      name: "project-users"
    },
    {
      name: "netlify",
      options: {
        title: "Netlify",
        sites: [
          {
            title: "rogierovervliet.nl",
            apiId: env.id,
            buildHookId: env.hook,
            name: "rogierovervliet"
          }
        ]
      }
    },
    {
      name: "gatsby",
      options: {
        sites: [
          {
            siteUrl: "https://gatsbyrogierovervliet-4524826338.gtsb.io/"
          }
        ]
      }
    }
  ]
};
