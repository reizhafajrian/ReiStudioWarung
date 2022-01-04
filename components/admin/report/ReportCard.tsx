const ReportCard = ({ title, value }: any) => {
  return (
    <div
      className='bg-white d-flex flex-column align-items-center py-4 px-3 mb-3 mb-md-0 me-md-4'
      style={{ minWidth: 280, height: 180, borderRadius: 20 }}
    >
      <h5 className='fw-normal mb-4 text-secondary'>{title}</h5>
      <h1 className='fw-bold'>{value}</h1>
    </div>
  )
}

export default ReportCard
