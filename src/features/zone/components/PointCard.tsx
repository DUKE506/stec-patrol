import AppAlertDialog from '@/components/AppAlertDialog'
import AppIconButton from '@/components/AppIconButton'
import {
  ClockIcon,
  EllipsisVerticalIcon,
  GripVerticalIcon,
  LockKeyholeIcon,
  LockKeyholeOpenIcon,
  Trash2Icon,
} from 'lucide-react'
import { useState } from 'react'
import type { PointAuthenticationMethod, PointType } from '../types'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const PointCard = ({ data }: { data: PointType }) => {
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

  const AuthenticationMethodBadge = (method: PointAuthenticationMethod) => {
    switch (method) {
      case 'QR':
        return (
          <div className="bg-success-bg text-xs text-success-foreground font-semibold px-2 py-1 rounded-sm ">
            QR
          </div>
        )
      case 'NFC':
        return (
          <div className="bg-point-bg text-xs text-point-foreground font-semibold px-2 py-1 rounded-sm ">
            NFC
          </div>
        )
    }
  }

  return (
    <div className="flex justify-between items-center relative p-2 border rounded-sm bg-background hover:shadow-sm hover:border-point/20">
      {/* 헤더 */}

      {/* 바디 */}
      <div className="flex justify-center items-center gap-2 ">
        <GripVerticalIcon className="text-muted-foreground/50" />
        <div
          className={`flex items-center justify-center text-sm font-medium rounded-sm  w-8 h-8 aspect-square p-2 
          bg-point-bg text-point-foreground
          `}
        >
          {data.order}
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium">{data.title}</span>
          <span className="text-muted-foreground text-xs">{data.description}</span>
        </div>
      </div>
      {/* 푸터 */}

      <div className="flex items-center justify-end gap-4 cursor-pointer">
        <div className="flex gap-2 items-center justify-center text-muted-foreground">
          <ClockIcon size={16} />
          {data.timeLimit} 분
        </div>
        {/* <div className="bg-success-bg text-success-foreground font-semibold px-2 py-1 rounded-sm ">
          {data.authenticationMethod}
        </div> */}
        {AuthenticationMethodBadge(data.authenticationMethod)}
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
      </div>
      {/* 비활성화시 오버레이로 감싸기 */}
      {!isActive && (
        <div className="absolute top-0 left-0 w-full h-full bg-muted/70 flex items-center justify-center">
          <AppAlertDialog
            size="sm"
            icon={LockKeyholeIcon}
            title="지점을 활성화하시겠습니까?"
            onAction={() => handleActive(true)}
          >
            <AppIconButton className="bg-muted" iconSize={20} icon={LockKeyholeIcon} />
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

const ActiveMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVerticalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>{/* 비활성화 */}</DropdownMenuItem>
          <DropdownMenuItem>{/* 수정 */}</DropdownMenuItem>
          <DropdownMenuItem>{/* 삭제 */}</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
