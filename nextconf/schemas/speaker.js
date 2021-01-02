/** @format */

export default {
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use Firstname Lastname format',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role at Company',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      description: 'Email adrress',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
      description: 'twitter username',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
      description: 'facebook username',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
