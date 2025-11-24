import { CollectionConfig } from "payload";

const Terms: CollectionConfig = {
  slug: "terms",
  labels: {
    singular: "Term of Use",
    plural: "Terms of Use",
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
      name: "body",
      type: "textarea",
      required: true,
    },
  ],
};

export default Terms;
