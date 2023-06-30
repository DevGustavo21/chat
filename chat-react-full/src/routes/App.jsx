import {Outlet, redirect, useLoaderData} from 'react-router-dom'
import ContactList from '../components/ContactList'
import {AuthContext} from '../context/auth.context'
import ky from '../utils/ky'
import {RiMenuFill} from 'react-icons/ri'

export async function loader() {
  try {
    const user = await ky.get('user').json()
    const channels = await ky.get('channels').json() //
    return {
      user,
      channels,
    }
  } catch (err) {
    if (err.response.status === 401) {
      return redirect('/login')
    }
  }
}

export default function App() {
  const {user, channels} = useLoaderData()

  function handleLogout() {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <AuthContext.Provider value={user}>
      <div className="flex h-screen">
        <div className="channels flex flex-col bg-indigo-50 sm:w-[150px] md:flex md:w-[250px] lg:flex lg:w-[300px]">
          <h2 className="flex h-12 items-center justify-center border-b border-white text-xl font-bold text-indigo-600">
            Channels
          </h2>

          <ContactList channels={channels} />

          <div className="mb-4 flex w-full items-center justify-center flex flex-col">
            <h4 className='text-gray-700'>Welcome, <span className='text-indigo-500 font-bold'>{user.name}</span></h4>
            <button
              className="flex w-[90%] items-center justify-center rounded-2xl bg-indigo-500 px-4 py-3 text-center font-bold text-white duration-300 ease-in-out hover:bg-indigo-600"
              onClick={handleLogout}
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="flex h-12 items-center justify-center border-b border-gray-100 text-xl font-semibold text-indigo-600">
            Messages
          </h2>
          <Outlet />
        </div>
      </div>
    </AuthContext.Provider>
  )
}
