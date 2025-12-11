import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export type Service = {
  id: string;
  title: string;
  slug: string;
  paragraph1: SerializedEditorState;
  photo: {
    url: string;
    alt: string;
  };
  ["bullet-points"]: SerializedEditorState;
  paragraph2: SerializedEditorState;
};
