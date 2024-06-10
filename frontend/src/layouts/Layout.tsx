interface Props{
    children: React.ReactNode;
 }
export const Layout = ({children}: Props) => {
  return (
    <div className="flex flex-col min-h-screen ">
        <div className="flex-1">{children}</div>
    </div>
  )
}
