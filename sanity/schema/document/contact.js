export default {
  name: 'Meeting',
  title: 'Meeting',
  type: 'document',
  fields: [
    {
      name: "time",
      title: "Time",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],


}