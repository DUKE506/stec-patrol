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
  trigger: React.ReactNode
  children: React.ReactNode
}

const AppDialog = ({ title, description, trigger, children }: AppDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className="">{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default AppDialog
