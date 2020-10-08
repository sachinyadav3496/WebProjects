import socket
client = socket.socket()
server_ip = input("Enter server's IP: ")
server_port = 12345
client.connect( (server_ip, server_port) )
print(f"Connected to server at {server_ip}:{server_port}")

END_VALUE = 'bye'

while True:
    request = input("You -> ")
    client.send(request.encode())
    if request.lower() == END_VALUE:
        print("Connection Closed by Client")
        break
    response = client.recv(1024).decode()
    print(f"Server -> {response}".rjust(100))
    if response.lower() == END_VALUE:
        print("Connection Close by Server")
        break

client.close()
