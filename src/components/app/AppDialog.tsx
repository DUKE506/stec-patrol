import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

interface AppDialogProps {
  title: string
  description?: string
  trigger?: React.ReactNode
  children: React.ReactNode
  open?: boolean // 추가
  onOpenChange?: (open: boolean) => void // 추가
}

const AppDialog = ({
  title,
  description,
  trigger,
  children,
  open,
  onOpenChange,
}: AppDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <DialogTrigger className="" asChild>
          {trigger}
        </DialogTrigger>
      )}
      <DialogContent className="max-h-[80vh] flex flex-col overflow-hidden p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="flex flex-col min-h-0 flex-1 p-4 pt-0 ">{children}</div>
      </DialogContent>
    </Dialog>
  )
}

export default AppDialog
