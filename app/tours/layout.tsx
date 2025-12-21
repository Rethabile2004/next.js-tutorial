
const ToursLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <section>
        <h1 className="bg-gray-300 p-4 text-3xl">Tours Page</h1>
        {children}
    </section>
  )
}

export default ToursLayout