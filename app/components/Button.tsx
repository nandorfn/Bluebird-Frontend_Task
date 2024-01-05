import { ButtonHTMLAttributes } from 'react';
import { cn } from '../libs/tailwind';
import {
  VariantProps,
  cva
} from 'class-variance-authority';

const buttonVariants = cva(
  'btn w-fit disabled:opacity-50',
  {
    variants: {
      variant: {
        search: ''
      }
    },
    defaultVariants: {
      variant: 'search',
    }
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  ...props
}) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props} />
  );
};

export { Button, buttonVariants };
