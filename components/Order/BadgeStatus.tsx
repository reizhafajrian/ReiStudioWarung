interface props {
  title: string
  bg?: string
  forAdmin?: boolean
}

const BadgeStatus = ({ title, forAdmin }: props) => {
  return (
    <>
      {title === 'pembayaran' && <Container title={title} bg='warning' />}
      {title === 'sedang diproses' && (
        <Container title={forAdmin ? 'menunggu pengiriman' : title} bg='info' />
      )}
      {title === 'sedang dikirim' && (
        <Container title={forAdmin ? 'dalam pengiriman' : title} bg='green' />
      )}
      {title === 'komplain' ||
        (title === 'komplain diproses' && (
          <Container
            title={forAdmin ? 'pengajuan komplen' : title}
            bg='danger'
          />
        ))}
      {title === 'selesai' && (
        <Container title={forAdmin ? 'pesanan selesai' : title} bg='success' />
      )}
    </>
  )
}

const Container = ({ title, bg }: props) => {
  return (
    <div
      className={`bg-${bg} text-white fw-bold p-2 px-3`}
      style={{ borderRadius: 20 }}
    >
      <p className='m-0 text-capitalize'>{title}</p>
    </div>
  )
}
export default BadgeStatus
