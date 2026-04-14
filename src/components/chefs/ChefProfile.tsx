import type { Chef } from '../../types/chef'
import { useMobile } from '../../hooks/useMobile'

interface ChefProfileProps {
  chef: Chef
}

function ChefProfile({ chef }: ChefProfileProps) {
  const isMobile = useMobile()

  return (
    <div className={`flex mb-6 ${isMobile ? 'flex-col items-center' : 'gap-8'}`}>
      <div
        className={`relative shrink-0 ${
          isMobile ? 'w-full max-w-sm aspect-square' : 'w-119.5 aspect-478/372'
        }`}
      >
        <img
          src={chef.image}
          alt={chef.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white/80 py-2 px-4 text-center">
          <h3 className={isMobile ? 'text-h3' : 'desktop-text-h3'}>{chef.name}</h3>
        </div>
      </div>
      <p
        className={`leading-relaxed ${
          isMobile ? 'text-body mt-4' : 'desktop-text-body self-center text-justify'
        }`}
      >
        {chef.bio}
      </p>
    </div>
  )
}

export default ChefProfile
