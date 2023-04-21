
import { Server as SocketServer } from 'socket.io'

const users = new Array()
const messages = new Array()
const colors = ['#ffc1c1', '#ffaaeb', '#ffa3ee', '#dda0ff', '#b8a0ff', '#a0b9ff', '#a0eaff', '#f032e6', '#82ff90', '#d1ff82']

export function initSocket(httpServer) {
const io = new SocketServer(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  })

  io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado!' + socket.id)

    socket.on('client-username', (data) => {
        
        /* verificar si exsiste socket.id  sino users.push({ id: socket.id, username: data }) */
        const user = users.find((user) => user.id === socket.id)
        if (user) {
            console.log('existe')
        } else {
            users.push({ id: socket.id, username: data, color: colors[Math.floor(Math.random() * colors.length)] })
        }
        console.log(users)
        io.emit('server-users', users)
    })




    //Enviar un saludo al cliente
    socket.emit('hello', {
        message: 'En que te podemos ayudar?',
        type: 'greeting',
    })

    socket.on('client-message', (data) => {
        const user = users.find((user) => user.id === socket.id)
        if (user) {
            console.log('existe')
            console.log(user)
            messages.push({ username: user.username, message: data, color: user.color })
        } else {
            console.log('no existe')
        }
        sendMessages()
    })


    socket.on('disconnect', () => {
      console.log('Cliente desconectado')
    })

    function sendMessages() {
        console.log(messages)
        io.emit('server-message', messages)
    }

  })
}



