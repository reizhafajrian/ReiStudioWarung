interface props {
  title: string
  bg?: string
}
const BadgePayment = ({ title }: props) => {
  return <Container title={title} bg='orange' />
}

const Container = ({ title, bg }: props) => {
  return (
    <div
      className={`bg-${bg} text-white fw-bold p-2 px-3`}
      style={{ borderRadius: 20 }}
    >
      <p className='m-0'>{title}</p>
    </div>
  )
}
export default BadgePayment
