import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}