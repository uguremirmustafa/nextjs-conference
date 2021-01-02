/** @format */

export default {
  name: 'conference',
  title: 'Conference',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Conference Name',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'conferenceBuilding',
      title: 'Conference Building Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'startingDate',
      title: 'Starting Date',
      type: 'datetime',
    },
    {
      name: 'endingDate',
      title: 'Ending Date',
      type: 'datetime',
    },
    {
      name: 'heroImages',
      title: 'Slider Images',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'logo',
      title: 'Conference Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
};
