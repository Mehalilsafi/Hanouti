 
import NavAuth from "../components/NavAuth"

 export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <div>

       <NavAuth/>
        <main>{children}</main>
  </div>
      
    
  )
}