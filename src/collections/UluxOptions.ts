import { CollectionConfig } from "payload";

const UluxOptions: CollectionConfig = {
  slug: "ulux",
  labels: {
    singular: "Ulux",
    plural: "Uluxs",
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "order",
      type: "number",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "bullet-points",
      type: "richText",
      required: true,
    },
    {
      name: "paragraph1",
      type: "richText",
      required: true,
    },
    {
      name: "paragraph2",
      type: "richText",
      required: false,
    },
  ],
};

export default UluxOptions;
