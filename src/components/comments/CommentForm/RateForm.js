import DescriptionField from './DescriptionField'
import RateButtonsLine from './RateButtonsLine'
import RateLine from './RateLine'

export default function RateForm() {
  return (
    <div className="rate-line-block">
        <RateLine />
        <DescriptionField />
        <RateButtonsLine />
    </div>
  )
}
