import { MapPinIcon } from 'lucide-react'

const PointEmptyCard = () => {
  return (
    <div className="bg-background flex-1 flex flex-col gap-4 items-center justify-center">
      <div
        className="w-fit rounded-full p-4 border bg-muted shadow-lg"
        style={{ animation: 'bounce-y 2s ease-in-out 5' }}
      >
        <MapPinIcon className="text-muted-foreground " />
      </div>
      <span className="font-bold text-base">지점을 생성해주세요</span>
      <span className="text-muted-foreground">
        지점을 생성하여 목록에서 클릭하면 상서젱보가 표시됩니다
      </span>
    </div>
  )
}

export default PointEmptyCard
