import { Collection, Schema, SchemaField, Template } from "tinacms";
import { ContentSchema, ListWithTitleSchema, TitleSchema } from "../SchemaUtils";
import { TinaMarkdown } from "tinacms/dist/rich-text";


export const IPFSFundSchema: SchemaField = {
    type: "object",
    name: "ipfs_fund",
    label: "IPFS Fund",
    fields: [
        TitleSchema,
        ContentSchema,
    ],
}

export function IPFSFund({ data }: { data: any }) {
    return (
          <section className="text-neutral-0 bg-neutral-800 hex2" id="ipfs-funds">
    <div className="padding-48">
      <div className="container margin-96 top">
        <div className="grid">
          <div className="small-12 medium-12 space-content margin-48 bottom">
            <h2 className="margin-16 blue-heading">
              {data.title}
            </h2>
            <p>
            <TinaMarkdown content={data.content} />
            </p>
          </div>
        </div>

        <div className="flex"> 
          {/* <Video client:only="react" /> */}
          <img src="/img/ipfs-circle.png" alt="IPFS Fund Logo" className="logo" />
        </div>
      </div>
    </div>
    <img src="/img/background_wave2.svg" alt="Wave Decoration" className="wave2" />
  </section> 
    )
}