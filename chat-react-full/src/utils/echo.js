import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher

export default new Echo({
  broadcaster: 'pusher',
  key: 'b7cdd108bb87be4f1535',
  cluster: 'us2',
  forceTLS: true,
})

