import { Collection, Schema, SchemaField, Template } from "tinacms";
import { ContentSchema, ListWithTitleSchema, TitleSchema } from "../SchemaUtils";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from "next/image";


export const PrivateRetrievalSchema: SchemaField = {
    type: "object",
    name: "private_retrieval",
    label: "Private Retrieval",
    fields: [
        TitleSchema,
        ContentSchema,
        {
            type: "object",
            name: "list",
            label: "List",
            fields: [
                TitleSchema,
                {
                    type: "object",
                    name: "items",
                    label: "Items",
                    list: true,
                    fields: [
                        ContentSchema
                    ]
                }
            ]
        }
    ],
}

export function PrivateRetrieval({ data }: { data: any }) {
    return (
  <section
    className="padding-48 text-neutral-0 bg-neutral-800"
    id="private-retreival-funds"
  >
    <div className="container">
      <div className="grid">
        <div className="small-12 medium-6 space-content">
          <h2 className="purple-heading">
            {data.title}
          </h2>
          <p>
          <TinaMarkdown content={data.content} />
          </p> 
          {/* <Button
            title="Learn More"
            link="https://github.com/protocol/research-grants/blob/master/RFPs/rfp-014-private-retrieval-of-data.md"
            classNameName="purple"
          /> */}
         </div>

        <div
          className="small-12 medium-7 offset-medium-7 text-neutral-800 bg-neutral-100 radius-large padding-32"
        >
          <div className="space-content space-48">
            <h3 className="purple-heading">
              {data.list.title}
            </h3>
            <ul>
              {

                  data.list.items.map((item, index) => (
                    <li key={index} className="padding-12"> <TinaMarkdown content={item.content} /> </li>
                  ))
              }
            </ul> 
            {/* <Button
              title="Find Opportunities"
              link="https://grants.protocol.ai/prog/rfp-014_private_retrieval_of_data/"
              classNameName="purple"
            /> */}
           </div>
        </div>
      </div>
    </div>
    <img src="/img/background_hex3.svg" alt="Wave Decoration" className="hex3" />
    <img src="/img/background_wave3.svg" alt="Wave Decoration" className="wave3" />
  </section> 
    );
}