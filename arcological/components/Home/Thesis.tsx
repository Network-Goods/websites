import { Collection, Schema, SchemaField, Template } from "tinacms";
import { ContentSchema, ListWithTitleSchema, TitleSchema } from "../SchemaUtils";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const ThesisSchema: SchemaField = {
    type: "object",
    name: "thesis",
    label: "Thesis",
    fields: [
        TitleSchema,
        ContentSchema,
    ],
}

export function Thesis(
    { data }: { data: any }
    ) {

        return (
            <section className="hex1" id="home">
            <div className="padding-64">
              <div className="container margin-128 bottom" data-auto-grid="1">
                <div className="grid">
                  <div className="small-12 medium-7 medium-offset-4">
                    <h1 className="margin-16 bottom title-left">
                      Building the<br /> public good.
                    </h1>
                  </div>
                  <div className="small-12 medium-7 space-9" data-animation="fade-in">
                    <p className="bg-neutral-100 radius-large">
                    <TinaMarkdown content={data.content} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img src="/img/background_wave1.svg" alt="Wave Decoration" className="wave1" />
          </section>

        );
    }