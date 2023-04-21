import { Rule, SchemaTypeDefinition } from '@sanity/types';

export const product: SchemaTypeDefinition = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
        title: 'Category',
        name: 'category',
        type: 'reference',
        to: {type: 'category'},
        validation: (rule: Rule) => rule.required(),
      },
      {
        title: 'Featured',
        name: 'featured',
        type: 'boolean',
      },
      {
        title: 'New Product',
        name: 'new',
        type: 'boolean',
      },
    {
        title: 'Description',
        name: 'description',
        type: 'array',
        of: [
          {
            type: 'block',
          },
          {
            type: 'image',
            options: {hotspot: true},
          },
        ],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.O.asset',
    },
  },
};
