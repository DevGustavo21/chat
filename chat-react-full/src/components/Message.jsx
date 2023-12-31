import clsx from 'clsx'
import moment from 'moment'
import {useUser} from '../context/auth.context'


export default function Message({message}) {
  const user = useUser()

  const isAuthUser = message.sender.id === user.id

  return (
    <div
      className={clsx('flex items-end space-x-2', {
        'self-end': isAuthUser,
      })}
    >
      {!isAuthUser && (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          {message.sender.name[0]}
        </div>
      )}

      <div
        className={clsx('rounded-md p-4', {
          'rounded-bl-none bg-blue-200': !isAuthUser,
          'rounded-br-none bg-orange-200': isAuthUser,
        })}
      >
        <div className="relative">
          {message.message}
          <div className="absolute -bottom-[13px] right-0 w-[250px] text-right text-[9px] text-gray-700">
            {moment(message.created_at).format('LT')}
          </div>
        </div>
      </div>
    </div>
  )
}
