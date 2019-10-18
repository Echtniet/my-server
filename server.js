const http = require(http)

const hostname = "0.0.0.0"
const port = 3002

const server = http.createHost((req, res) =>{
	res.statusCode = 200
	res.setheader('Content-type', 'text/plain')
	res.write('Hello...\n')
	res.write('Hello...\n')
	res.end('Hello node.js World!)\n')
})

server.listen(port, hostname, () => {
	console.log('Server running at http://localhost:${port}/')
})