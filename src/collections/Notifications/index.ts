import { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'

const Notifications: CollectionConfig = {
  labels: {
    singular: 'Notification',
    plural: 'Notifications',
  },
  slug: 'notifications',
  admin: {
    useAsTitle: 'title',
    // group: 'Events',
  },
  access: {
    read: authenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      label: 'SubTitle',
    },
    {
      name: 'message',
      type: 'text',
      required: true,
      label: 'Content',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Upload Image | Banner | Ad',
    },
    {
      type: 'text',
      name: 'link',
      required: false,
      label: 'Deep Link for Notification',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  orderable: true,
  hooks: {
    afterChange: [
      ({ doc }) => {
        const options = {
          method: 'POST',
          headers: {
            Authorization: `Key ${process.env.ONESIGNAL_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            app_id: process.env.ONESIGNAL_APP_ID,
            contents: { en: doc.message },
            included_segments: ['All'],
            // include_aliases: { external_id: ['<string>'] },
            target_channel: 'push',
            headings: { en: doc.title },
            subtitle: { en: doc.subtitle },
            name: doc.title + new Date().toISOString(),
            big_picture: doc.media?.url,
            url: doc.link,
          }),
        }

        fetch('https://api.onesignal.com/notifications?c=push', options)
          .then((res) => res.json())
          .then((res) => console.log(res))
          .catch((err) => console.error(err))
      },
    ],
  },
}

export default Notifications
