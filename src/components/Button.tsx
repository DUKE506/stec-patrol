import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'

/**
 * 1. 아이콘
 * 2. 타입 - 기본, 서브, 삭제
 * 3. 사이즈 - w-full, w-fit
 */

type ButtonVariant = 'default' | 'sub' | 'destructive' | 'dash'
type ButtonSize = 'full' | 'fit'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  iconSize?: number
  iconStrokeWidth?: number
}

const variantStyles: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground py-2 px-4 hover:bg-primary/90',
  sub: 'bg-transparent text-foreground border border-border hover:bg-muted',
  destructive: 'bg-transparent text-destructive border border-danger/40 hover:bg-danger/10',
  dash: 'bg-none border-2 border-dashed text-muted-foreground hover:border-primary hover:text-primary',
}

const sizeStyles: Record<ButtonSize, string> = {
  full: 'w-full',
  fit: 'w-fit',
}

const Button = ({
  variant = 'default',
  size = 'fit',
  icon: Icon,
  iconPosition = 'left',
  iconSize = 16,
  iconStrokeWidth = 1.5,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'shrink-0 flex items-center justify-center gap-2 px-4 py-2 rounded-sm text-sm font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={iconSize} strokeWidth={iconStrokeWidth} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={iconSize} strokeWidth={iconStrokeWidth} />}
    </button>
  )
}

export default Button
