interface props {
  title: string
  bg: string
}

const BadgeStatus = ({ title, bg }: props) => {
  return (
    <div
      className={`bg-${bg} text-white fw-bold mt-3 p-2`}
      style={{ borderRadius: 20 }}
    >
      <p className='m-0'>{title}</p>
    </div>
  )
}

export default BadgeStatus
