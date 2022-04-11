import { PropsWithChildren } from 'react';

export interface ClassNameProps {
  className?: string | null | undefined;
}

export interface ClassNameChildrenProps extends PropsWithChildren<unknown> {
  className?: string;
}
