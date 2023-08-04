import { Link, Outlet } from 'react-router-dom'
function Root() {
  return (
    <>
      <header className="flex items-center gap-10">
        <Link to={'/'}>Home</Link>
        <Link to={'/contacts'}>Contacts</Link>
        <Link to={'/posts'}>Posts</Link>
      </header>
      <Outlet />
      <footer className="bg-gray-300">Footer</footer>
    </>
  )
}

export default Root
