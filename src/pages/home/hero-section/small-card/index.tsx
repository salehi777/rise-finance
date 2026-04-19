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
        <span>
          <Image src="/images/mastercard-logo-2.png" alt="Mastercard Logo" />
        </span>
        <span>Credit Card</span>
        <div>
          <div>
            {[1, 2, 3, 4].map((i) => (
              <span key={i} />
            ))}
          </div>
          <span>1289</span>
        </div>
        <div>
          <div>
            <Image src="/images/chip.png" alt="Mastercard Logo" />
          </div>
          <span>09/25</span>
        </div>
      </div>
    </StyledSmallCard>
  )
}
