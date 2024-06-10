export default {
  name: 'receipe',
  title: 'Receipe',
  type: 'document',
  fields: [
    {
      name: "dish",
      title: "Dish",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'link',
      title: 'link',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
  ],


}