import { cn } from '@/shared/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return <div className={cn('max-w-300 px-2.5 mx-auto', className)}>{children}</div>
}
