type ReviewProps = {
  rating?: number
}

const getReview = (rating?: number) => {
  if (!rating) {
    return 'No reviews yet'
  }

  let reviewText = 'Very poor'

  if (rating === 5) {
    reviewText = 'Excellent'
  } else if (rating >= 4 && rating <= 5) {
    reviewText = 'Very good'
  } else if (rating >= 2 && rating <= 4) {
    reviewText = 'Adequate'
  }

  return `★ ${rating.toFixed(1)} ${reviewText}`
}

export const Review = ({ rating }: ReviewProps) => (
  <div>{getReview(rating)}</div>
)
