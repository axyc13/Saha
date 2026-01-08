import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export type Ulux = {
  id: string;
  title: string;
  slug: string;
  description: string;
  photo: {
    url: string;
    alt: string;
  };
  paragraph1: SerializedEditorState;
  paragraph2: SerializedEditorState;
  ["bullet-points"]: SerializedEditorState;
};
