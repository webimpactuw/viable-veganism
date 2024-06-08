export default {
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      validation: (Rule) => Rule.required()
    },
  ],


}