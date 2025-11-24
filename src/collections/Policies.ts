import { CollectionConfig } from "payload";

const Policies: CollectionConfig = {
  slug: "policies",
  labels: {
    singular: "Policy",
    plural: "Policies",
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

export default Policies;
