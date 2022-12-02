import { Collection, SchemaField, Template } from "tinacms";
import { ContentSchema, ListWithTitleSchema, TitleSchema } from "../SchemaUtils";
import { TinaMarkdown } from "tinacms/dist/rich-text";


export const WhySchema: SchemaField = {
    type: 'object',
    name: "why",
    label: "Why",
    fields: [
        TitleSchema,
        ContentSchema,
        {
          type: "object",
          name: "list",
          label: "Interested projects list",
          fields: [
              TitleSchema,
              {
                  type: "object",
                  name: "items",
                  label: "Items",
                  list: true,
                  ui: {
                    itemProps: (item) => {
                      return { label: item.title };
                    },
                  },
                  fields: [
                      TitleSchema,
                      ContentSchema
                  ]
              }
          ]
      }
    ]
}

export function Why(
    { data }: { data: any }
    ) {

      // console.log("why", data.why);
    
    return (
        <section className="padding-64 margin-64 top" id="why">
        <div className="container">
          <div className="small-12 medium-12 space-content">
            <h2 className="margin-16">
              {data.title}
            </h2>
    
            <p>
            <TinaMarkdown content={data.content} />
            </p>
          </div>
          <div className="accordion-grid">
            {/* GRID WITH REASONS */}
            {
              
                data.list.items.map((item, index) => (
                  <div key={index} className="accordion">
                    <h3>{item.title}</h3>
                    <p><TinaMarkdown content={data.content} /></p>
                  </div>
                ))
            }
          </div>
        </div>
        <img src="/img/background_wave4.svg" alt="Wave Decoration" className="wave4" />
      </section>
    );
}