import socket
server = socket.socket()
server_ip = input("Enter Server IP: ")
server_port = 12345
server.bind( (server_ip, server_port ) )
server.listen()
print(f"Server is Running on {server_ip}:{server_port}")
client, addr = server.accept()
client_ip, client_port = addr
print("Got A Connection from Client")
print(f"Client Address is {client_ip}:{client_port}")
END_VALUE = 'bye'
while True:
    request = client.recv(1024).decode()
    print(f"Client -> {request}".rjust(100))
    if request.lower() == END_VALUE:
        print("Closing Connection From Client Side")
        client.close()
        break 
    msg = input("Your -> ")
    client.send(msg.encode())
    if msg.lower() == END_VALUE:
        print("Closing Connection From Server Side")
        client.close()
        break

server.close()


