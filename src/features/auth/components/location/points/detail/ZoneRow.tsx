const ZONE_COLORS = [
  'bg-blue-500',
  'bg-pink-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-violet-500',
  'bg-red-500',
  'bg-cyan-500',
]

const getZoneColor = (id: string) => {
  const index = id.charCodeAt(0) % ZONE_COLORS.length
  return ZONE_COLORS[index]
}

const ZoneRow = ({ idx, title }: { idx: string; title: string }) => {
  return (
    <div className="flex items-center gap-4 py-2 border-b">
      <div className={`w-2 h-2 rounded-full ${getZoneColor(idx)}`} />
      <span>{title}</span>
    </div>
  )
}

export default ZoneRow
