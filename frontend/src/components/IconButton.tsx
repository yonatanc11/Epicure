interface IconButtonProps {
  icon: string
  alt: string
  onClick?: () => void
}

function IconButton({ icon, alt, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={icon} alt={alt} className="w-6 h-6" />
    </button>
  )
}

export default IconButton
