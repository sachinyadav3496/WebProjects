import socket 


content= """<!Doctype html>
<html>
    <body>
        <h1 style='color:red'> Hello Welcome Custom Web Server </h1>
        <h2 syyle='color:blue'> You are at Home Page</h2>
        <a href='/'> HOME </a> 
        <a href='/data/'>Data</a>
    </body>
</html>

"""
c_len = len(content)

home = f"""HTTP/1.1 200 OK
Server: Apache
Accept-Ranges: bytes
Content-Length: {c_len}
Content-Type: text/html

{content}"""



content= """<!Doctype html>
<html>
    <body>
        <h1 style='color:magenta'> This is how a site works </h1>
        <h2 syyle='color:green'> You are at DATA PAGE</h2>
        <a href='/'> HOME </a> 
        <a href='/data/'>Data</a>
    </body>
</html>

"""
c_len = len(content)

data = f"""HTTP/1.1 200 OK
Server: Apache
Accept-Ranges: bytes
Content-Length: {c_len}
Content-Type: text/html

{content}"""



content= """<!Doctype html>
<html>
    <body>
        <h1 style='color:magenta'> Page Not Found </h1>
        <a href='/'> HOME </a> 
        <a href='/data/'>Data</a>
    </body>
</html>

"""
c_len = len(content)

err = f"""HTTP/1.1 400 OK
Server: Apache
Accept-Ranges: bytes
Content-Length: {c_len}
Content-Type: text/html

{content}"""

print(resp)



server = socket.socket()

server.bind(('localhost', 80))

server.listen()

for var in range(5):
    
    client, addr = server.accept()
    print("Client Address: ", addr)
    
    req = client.recv(2048).decode()
    path = req.split('\n')[0].split(' ')[1]
    
    if path == '/':
        resp = home
    elif path == '/data/' or path == '/data':
        resp = data
    else:
        resp = err
    client.send(resp.encode())
    client.close()
    
server.close()
    
