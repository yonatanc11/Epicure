import type { Chef } from '../../types/chef'

interface ChefProfileProps {
  chef: Chef
}

function ChefProfile({ chef }: ChefProfileProps) {
  return (
    <div className="flex flex-col items-center mb-6">
      <img
        src={chef.image}
        alt={chef.name}
        className="w-full max-w-sm aspect-square object-cover mb-4"
      />
      <h3 className="text-h3 text-white mb-2">{chef.name}</h3>
      <p className="text-body text-white leading-relaxed">{chef.bio}</p>
    </div>
  )
}

export default ChefProfile
