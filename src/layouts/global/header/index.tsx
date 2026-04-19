import { Button, IconButton } from '@mui/material'
import { StyledHeader } from './styles'
import useSettingsStore from '@/stores/useSettingsStore'
import { modeList, modePathsMatrix } from '@/constants/svg-paths-matrix'
import MotionIconRotate from '@/components/ui/motion-icon/motion-icon-rotate'
import MotionIconFlubber from '@/components/ui/motion-icon/motion-icon-flubber'
import { Link, NavLink } from 'react-router'
import Image from '@/components/ui/image'
import { useEffect, useState } from 'react'
import useLanguageChange from '@/hooks/useLanguageChange'

export default function Header() {
  // language
  const onLanguageChange = useLanguageChange()

  // hide/show header
  const [showHeader, setShowHeader] = useState(true)
  useEffect(() => {
    let lastScrollY = scrollY
    const func = () => {
      setShowHeader(lastScrollY >= scrollY)
      lastScrollY = scrollY
    }
    document.addEventListener('scroll', func)
    return () => document.removeEventListener('scroll', func)
  }, [])

  // mode
  const mode = useSettingsStore((s) => s.mode)
  const setMode = useSettingsStore((s) => s.setMode)
  const changeMode = (event: React.MouseEvent) =>
    setMode(modeList[(modeList.indexOf(mode) + 1) % 3], event)

  return (
    <StyledHeader data-show={showHeader}>
      <Link to="/">
        <Image src="/images/logo.png" />
      </Link>

      <ul>
        {[
          { link: '/home', label: 'home' },
          { link: '/test', label: 'Test' },
        ].map(({ link, label }) => (
          <li key={link}>
            <NavLink to={link}>{label}</NavLink>
          </li>
        ))}
      </ul>

      <div data-mode>
        <IconButton onClick={changeMode}>
          <MotionIconFlubber
            count={3}
            trigger={mode}
            pathsMatrix={modePathsMatrix}
            startValue={modeList.indexOf(mode)}
          />
        </IconButton>
        <IconButton onClick={changeMode}>
          <MotionIconRotate
            index={mode === 'system' ? 0 : mode === 'light' ? 1 : 2}
            srcs={['/icons/monitor.svg', '/icons/sun.svg', '/icons/moon.svg']}
          />
        </IconButton>
      </div>

      <div data-lang>
        <Button onClick={() => onLanguageChange('fa')}>Fa</Button>
        <Button onClick={() => onLanguageChange('en')}>En</Button>
      </div>
    </StyledHeader>
  )
}
