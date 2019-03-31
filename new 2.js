const Net =require('net');
const port = 3000;
const client - new Net.Socket();
client.connect(port,host, function() {
	console.log('TCP connect established with the server.');
	client.write('Hello,server.');
});
client.on('data', function(chunk) {
	console.log('Data received from the server:',chunk.toString();
	client.end();
});
client.on('end', function) {
	console.log('Requested an end to the TCP connection');
});
	
	