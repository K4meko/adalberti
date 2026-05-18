import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'createdAt'],
  },
  // 💡 Enables draft/publishing states for your blog workflows
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      maxLength: 200,
    },
    {
      name: 'content',
      type: 'richText', // Uses Payload's native Lexical text engine
      required: true,
    },
  ],
}
