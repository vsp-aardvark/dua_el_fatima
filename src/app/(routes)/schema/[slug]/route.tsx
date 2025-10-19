import config from '@payload-config'

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params

  const collection = (await config).collections?.find((c) => c.slug === slug)

  if (!collection) {
    return new Response(JSON.stringify({ error: `No collection '${slug}' found` }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify(collection.flattenedFields, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
