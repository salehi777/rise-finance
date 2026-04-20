import Image from '@/components/ui/image'
import { StyledBigCard } from './styled'

export default function BigCard() {
  return (
    <StyledBigCard ratio={10}>
      <Image
        src="/images/card-big.png"
        alt="Mastercard"
        sizes="(max-width: 900px) 100vw, 50vw"
      />

      <div>
        <div>
          <div>
            <span>Current Balance</span>
            <span>$5,750.20</span>
          </div>
          <Image src="/images/mastercard-logo.png" alt="Mastercard Logo" />
        </div>
        <span>5282 3456 7890 1289</span>
      </div>
    </StyledBigCard>
  )
}
