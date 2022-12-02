import { SchemaField } from "tinacms";

export const TitleSchema: SchemaField = {
    type: "string",
    name: "title",
    label: "Title",
}

export const ContentSchema: SchemaField = {
    type: "rich-text",
    name: "content",
    label: "Content",
}

export const LinkSchema: SchemaField = {
    type: 'object',
    name: 'link',
    fields: [
      {
        type: 'string',
        name: 'url',
      },
      {
        type: 'string',
        name: 'text',
      }
    ],
}

export const ListWithTitleSchema: SchemaField = {
    type: 'object',
                name: 'list',
                fields: [
                  {
                    type: 'string',
                    name: 'title',
                  },
                  {
                    type: 'object',
                    name: 'items',
                    list: true,
                    fields: [
                      {
                        type: 'string',
                        name: 'content',
                      },
                      {
                        type: 'string',
                        name: 'title',
                      },
                    ]
                  }
                ], 
}