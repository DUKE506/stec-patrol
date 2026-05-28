import PointCard from '@/features/auth/components/location/zones/PointCard'
import ZoneSideBar from '@/features/auth/components/location/zones/ZoneSideBar'
import ZoneTopNav from '@/features/auth/components/location/zones/ZoneTopNav'

const ZonesPage = () => {
  // 구역목록 선택 시 state담아서 컨텐츠로 넘겨주야함

  /**
   * 필요 내용 및 기능
   * 1. view : 순찰구역 목록, 선택된 구역정보
   *  1-1 순찰구역목록 :
   *  1-2 선택된 구역정보 : 구역명, 설명, 순찰시간, 교대허용 on/off, 사용여부 on/off
   * 2. create : 순찰구역 추가(지점 목록 불러와서 선택하는 방식)
   * 3. edit
   *   - 순찰구역 수정(지점 순서 변경은 드래그앤드롭)
   *   - 지점 추가 : 1. 시트를 만들어서 드래그앤드롭, 2. 모달에서 선택하여 불러온다음 순서변경
   *
   * 4. delete : 순찰구역 삭제
   *
   *
   */

  return (
    <div className="flex flex-1 ">
      <ZoneSideBar />
      <div className="flex-1 flex flex-col">
        <ZoneTopNav />
        <div className="p-4">
          <div className="grid xl:grid-cols-5 xl:gap-4">
            <PointCard />
            <PointCard />
            <PointCard />
            <PointCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZonesPage
