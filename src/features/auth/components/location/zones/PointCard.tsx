import AppAlertDialog from '@/components/AppAlertDialog'
import AppIconButton from '@/components/AppIconButton'
import { Switch } from '@/components/ui/switch'
import { LockKeyholeIcon, LockKeyholeOpenIcon, Trash2Icon } from 'lucide-react'
import { useState } from 'react'

const PointCard = () => {
  const [isActive, setIsActive] = useState<boolean>(true)
  // 지점 데이터 전달받아야함

  // TODO: 아이콘 버튼 컴포넌트화
  // TODO: 삭제 등 확인 모달 컴포넌트화
  //

  /**
   * 필요 내용 및 기능
   * 1. view : 순서, 지점명, 인증수단정보, 사용여부, 소요시간
   * 2. edit : 순서(드래그앤드롭으로만 가능), 사용여부(비활성화 버튼), 소요시간
   * 3. delete : 구역에서 삭제
   * 4. 비활성화 시 순서에서 제외
   *
   */

  const handleActive = (status: boolean) => {
    setIsActive(status)
  }

  return (
    <div className="relative space-y-2 p-4 border rounded-sm bg-background ">
      {/* 헤더 */}
      <div className="flex items-center justify-end gap-2 cursor-pointer">
        {/* SEPARATE: 컴포넌트화, 눌러서 삭제 확인 모달 */}
        {/* FIXME: 스위치 방식보다 버튼식으로 변경 -> 카드 자체를 비활성화 하는 방향으로 */}
        {/* <Switch /> */}
        <AppAlertDialog
          size="sm"
          icon={LockKeyholeOpenIcon}
          title="지점을 비활성화하시겠습니까?"
          onAction={() => handleActive(false)}
        >
          <AppIconButton icon={LockKeyholeOpenIcon} />
        </AppAlertDialog>
        <AppAlertDialog
          size="sm"
          icon={Trash2Icon}
          variant="destructive"
          title="지점을 삭제하시겠습니까?"
          onAction={() => {}}
        >
          <AppIconButton icon={Trash2Icon} />
        </AppAlertDialog>
        {/* SEPARATE: 컴포넌트화, 눌러서 삭제 확인 모달 */}
        {/* <div className="p-1 aspect-square rounded-full border" onClick={() => handleActive(false)}>
          <LockKeyholeOpenIcon className="text-muted-foreground" size={16} strokeWidth={1.5} />
        </div>
        <div className="p-1 aspect-square rounded-full border">
          <Trash2Icon className="text-muted-foreground" size={16} strokeWidth={1.5} />
        </div> */}
      </div>
      {/* 바디 */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center text-base font-medium w-8 h-8 rounded-full border aspect-square p-2">
          1
        </div>
        <span>정문입구</span>
      </div>
      {/* 푸터 */}
      <span className="text-muted-foreground text-xs">정문 CCTV앞, 출입 통제 구역</span>
      {/* 비활성화시 오버레이로 감싸기 */}
      {!isActive && (
        <div className="absolute top-0 left-0 w-full h-full bg-muted/70 flex items-center justify-center">
          <AppAlertDialog
            size="sm"
            icon={LockKeyholeIcon}
            title="지점을 활성화하시겠습니까?"
            onAction={() => handleActive(true)}
          >
            <AppIconButton className="p-4 bg-muted" iconSize={24} icon={LockKeyholeIcon} />
          </AppAlertDialog>
          {/* <div
            className="cursor-pointer p-4 border rounded-sm bg-muted"
            onClick={() => setIsActive(true)}
          >
            <LockKeyholeIcon className="text-muted-foreground" />
          </div> */}
        </div>
      )}
    </div>
  )
}

export default PointCard
