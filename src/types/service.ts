import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export type Service = {
  id: string;
  title: string;
  body: SerializedEditorState;
};
