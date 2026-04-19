import { useEffect } from 'react'
import NProgress from 'nprogress'
import { useLocation, useSearchParams } from 'react-router'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export default function ProgressBar() {
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    NProgress.done()

    return () => {
      NProgress.start()
    }
  }, [pathname, searchParams])

  return null
}
