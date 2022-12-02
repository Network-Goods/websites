import { defineStaticConfig } from "tinacms";

import * as Home from "../components/Home/";


const config = defineStaticConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      {
        label: 'Copy',
        name: 'copy',
        path: '/content',
        format: "md",
        fields: [
          Home.AboutSchema,
          Home.IPFSFundSchema,
          Home.PrivateRetrievalSchema,
          Home.ThesisSchema,
          Home.WhySchema,
        ]
      },
      // {
      //   label: "Blog Posts",
      //   name: "post",
      //   path: "content/posts",
      //   format: "mdx",
      //   ui: {
      //     router: ({ document }) => {
      //       return `/post/${document._sys.filename}`;
      //     },
      //   },
      //   fields: [
      //     {
      //       type: "string",
      //       label: "Title",
      //       name: "title",
      //       isTitle: true,
      //       required: true,
      //     },
      //     {
      //       type: "image",
      //       name: "heroImg",
      //       label: "Hero Image",
      //     },
      //     {
      //       type: "rich-text",
      //       label: "Excerpt",
      //       name: "excerpt",
      //     },
      //     {
      //       type: "reference",
      //       label: "Author",
      //       name: "author",
      //       collections: ["author"],
      //     },
      //     {
      //       type: "datetime",
      //       label: "Posted Date",
      //       name: "date",
      //       ui: {
      //         dateFormat: "MMMM DD YYYY",
      //         timeFormat: "hh:mm A",
      //       },
      //     },
      //     {
      //       type: "rich-text",
      //       label: "Body",
      //       name: "_body",
      //       templates: [
      //         {
      //           name: "DateTime",
      //           label: "Date & Time",
      //           inline: true,
      //           fields: [
      //             {
      //               name: "format",
      //               label: "Format",
      //               type: "string",
      //               options: ["utc", "iso", "local"],
      //             },
      //           ],
      //         },
      //         {
      //           name: "BlockQuote",
      //           label: "Block Quote",
      //           fields: [
      //             {
      //               name: "children",
      //               label: "Quote",
      //               type: "rich-text",
      //             },
      //             {
      //               name: "authorName",
      //               label: "Author",
      //               type: "string",
      //             },
      //           ],
      //         },
      //         {
      //           name: "NewsletterSignup",
      //           label: "Newsletter Sign Up",
      //           fields: [
      //             {
      //               name: "children",
      //               label: "CTA",
      //               type: "rich-text",
      //             },
      //             {
      //               name: "placeholder",
      //               label: "Placeholder",
      //               type: "string",
      //             },
      //             {
      //               name: "buttonText",
      //               label: "Button Text",
      //               type: "string",
      //             },
      //             {
      //               name: "disclaimer",
      //               label: "Disclaimer",
      //               type: "rich-text",
      //             },
      //           ],
      //           ui: {
      //             defaultItem: {
      //               placeholder: "Enter your email",
      //               buttonText: "Notify Me",
      //             },
      //           },
      //         },
      //       ],
      //       isBody: true,
      //     },
      //   ],
      // },
      // {
      //   label: "Authors",
      //   name: "author",
      //   path: "content/authors",
      //   format: "md",
      //   fields: [
      //     {
      //       type: "string",
      //       label: "Name",
      //       name: "name",
      //       isTitle: true,
      //       required: true,
      //     },
      //     {
      //       type: "string",
      //       label: "Avatar",
      //       name: "avatar",
      //     },
      //   ],
      // },
      // {
      //   label: "Pages",
      //   name: "page",
      //   path: "content/pages",
      //   ui: {
      //     router: ({ document }) => {
      //       if (document._sys.filename === "home") {
      //         return `/`;
      //       }
      //       if (document._sys.filename === "about") {
      //         return `/about`;
      //       }
      //       return undefined;
      //     },
      //   },
      //   fields: [
      //     {
      //       type: "string",
      //       label: "Title",
      //       name: "title",
      //       isTitle: true,
      //       required: true,
      //     },
      //     {
      //       type: "object",
      //       list: true,
      //       name: "blocks",
      //       label: "Sections",
      //       ui: {
      //         visualSelector: true,
      //       },
      //       templates: [
      //         heroBlockSchema,
      //         featureBlockSchema,
      //         contentBlockSchema,
      //         testimonialBlockSchema,
      //       ],
      //     },
      //   ],
      // },
    ],
  },
});

export default config;
