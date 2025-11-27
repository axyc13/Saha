import { CollectionConfig } from "payload";

const Values: CollectionConfig = {
  slug: "values",
  admin: {
    useAsTitle: "text",
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
      name: "Icon",
      type: "text",
      required: true,
    },
    {
      name: "text",
      type: "text",
      required: true,
    },
  ],
};

export default Values;
