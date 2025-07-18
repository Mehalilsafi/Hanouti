import { ReactNode } from 'react';
import Nav from '@/app/components/Nav';
import Footer from '../components/Footer';
interface LayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: LayoutProps) {
  return (
    <div>
       <Nav/>
       <main>

      {children}
       </main>
     
      <Footer/>
    </div>
  );
}