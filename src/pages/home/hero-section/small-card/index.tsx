import Image from '@/components/ui/image'
import { StyledSmallCard } from './styled'

export default function SmallCard() {
  return (
    <StyledSmallCard>
      <Image
        src="/images/card-small.png"
        alt="Mastercard"
        sizes="(max-width: 900px) 50vw, 25vw"
      />
      <div>
        <Image src="/images/mastercard-logo-2.png" alt="Mastercard Logo" />
        <div>
          <span>Credit Card</span>
          <div>
            <svg width="51" height="6" viewBox="0 0 51 6" fill="white">
              <circle cx="3" cy="3" r="3" />
              <circle cx="18" cy="3" r="3" />
              <circle cx="33" cy="3" r="3" />
              <circle cx="48" cy="3" r="3" />
            </svg>
            <span>1289</span>
          </div>
        </div>
        <div>
          <Image src="/images/chip.png" alt="Mastercard Logo" />
          <span>09/25</span>
        </div>
      </div>
    </StyledSmallCard>
  )
}
