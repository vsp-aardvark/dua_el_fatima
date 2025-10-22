import { ReactNode } from 'react'
import { toAbsoluteUrl } from '@/common/lib/helpers'
import { CardContent } from '@/common/ui/card'

const FormsLayout = ({ children }: { children: ReactNode }) => (
  <>
    <style>
      {`
          .page-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-10.png')}');
          }
          .dark .page-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-10-dark.png')}');
          }
        `}
    </style>
    <div className="flex flex-col items-center justify-center grow bg-center bg-no-repeat page-bg">
      {/*<div className="m-5">*/}
      {/*  <Link href="/">*/}
      {/*    <img*/}
      {/*      src={toAbsoluteUrl('/android-chrome-192x192.png')}*/}
      {/*      className="h-[35px] max-w-none"*/}
      {/*      alt=""*/}
      {/*    />*/}
      {/*  </Link>*/}
      {/*</div>*/}
      <div className="w-full md:max-w-[400px] mx-auto mx-w-[95%]">
        <CardContent className="p-6">{children}</CardContent>
      </div>
    </div>
  </>
)

export default FormsLayout
