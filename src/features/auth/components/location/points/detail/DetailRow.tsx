const DetailRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}

export default DetailRow
