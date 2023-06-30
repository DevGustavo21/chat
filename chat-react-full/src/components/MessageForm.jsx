import {forwardRef} from 'react'
import {Form, useParams} from 'react-router-dom'

const MessageForm = forwardRef(function MessageForm(props, ref) {
  const params = useParams()

  return (
    <Form
      action={`/rooms/${params.roomId}`}
      className="mt-4 rounded-md bg-indigo-50 px-2 py-5"
      method="post"
      ref={ref}
    >
      <input
        autoFocus
        className="block w-full bg-transparent px-4 py-2 text-[#353535] outline-none"
        name="message"
        placeholder="Message..."
        type="text"
      />
    </Form>
  )
})

export default MessageForm
