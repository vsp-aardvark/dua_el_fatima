import { NextRequest, NextResponse } from 'next/server'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const mediaDoc = await payload.findByID({
      collection: 'media',
      id: params.id,
    })

    if (!mediaDoc || !mediaDoc.url) {
      return NextResponse.json({ error: 'Media not found' }, { status: 404 })
    }

    const url = req.nextUrl.clone()
    url.pathname = mediaDoc.url

    // Option 1: Redirect to S3 URL
    return NextResponse.redirect(url)

    // ---- OR ----
    // Option 2: Proxy the file through Next.js
    // const fileResponse = await fetch(mediaDoc.url);
    // const buffer = await fileResponse.arrayBuffer();
    // return new NextResponse(buffer, {
    //   status: 200,
    //   headers: {
    //     "Content-Type": fileResponse.headers.get("content-type") || "application/octet-stream",
    //     "Content-Disposition": `inline; filename="${mediaDoc.filename}"`,
    //   },
    // });
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 })
  }
}
