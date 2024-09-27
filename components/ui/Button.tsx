import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold uppercase tracking-wide ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-2 border-b-4 border-slate-200 bg-white text-slate-500 hover:bg-slate-100 active:border-b-2',
        locked:
          'border-b-4 border-neutral-400 bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 active:border-b-0',
        primary:
          'border-b-4 border-sky-400 bg-sky-300 text-primary-foreground hover:bg-sky-400/90 active:border-b-0',
        primaryOutline: 'bg-white text-sky-500 hover:bg-slate-200/50',
        secondary:
          'border-b-4 border-green-600 bg-green-500 text-primary-foreground hover:bg-green-500/90 active:border-b-0',
        secondaryOutline: 'bg-white text-green-500 hover:bg-slate-200/50',
        danger:
          'border-b-4 border-rose-600 bg-rose-500 text-primary-foreground hover:bg-rose-500/90 active:border-b-0',
        dangerOutline: 'bg-white text-rose-500 hover:bg-slate-200/50',
        super:
          'border-b-4 border-indigo-600 bg-indigo-500 text-primary-foreground hover:bg-indigo-500/90 active:border-b-0',
        superOutline: 'bg-white text-indigo-500 hover:bg-slate-200/50',
        ghost:
          'border-0 border-transparent bg-transparent text-slate-500 hover:bg-slate-200/50',
        sidebar:
          'border-2 border-transparent bg-transparent text-slate-500 transition-none hover:bg-slate-200/50',
        sidebarOutline:
          'border-2 border-sky-200 bg-sky-500/15 text-sky-500 transition-none hover:bg-sky-500/20'
      },
      size: {
        default: 'h-11 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8',
        icon: 'size-10',
        rounded: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
