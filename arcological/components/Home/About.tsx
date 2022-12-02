import { Collection, Schema, SchemaField, Template } from "tinacms";
import { ContentSchema, ListWithTitleSchema, TitleSchema } from "../SchemaUtils";
import { TinaMarkdown } from "tinacms/dist/rich-text";


export const AboutSchema: SchemaField = {
    type: "object",
    name: "about",
    label: "About",
    fields: [
        TitleSchema,
        ContentSchema,
        {
            type: "object",
            name: "blurb",
            label: "Blurb",
            fields: [
                TitleSchema,
                ContentSchema
            ]
        }
    ],
}

export function About({ data }: { data: any }) {
    return (
  <section className="padding-48 hex4" id="about">
    <div className="container">
      <div className="grid">
        <div className="small-12 medium-7 space-content">
          <h2>{data.title}</h2>
          <p
            className="small-12 medium-7 bg-neutral-100 radius-large outer-padding"
          >
            <TinaMarkdown content={data.content} />
          </p>
        </div>

        <div
          className="small-12 medium-5 space-content space-32 text-neutral-100 bg-neutral-800 radius-large"
        >
          <h3 className="pink-heading">
            {data.blurb.title}
          </h3>
          <p><TinaMarkdown content={data.blurb.content} /></p>
        </div>
      </div>
    </div>
  </section> 
    );
}