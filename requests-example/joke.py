import requests

def main():
    params = { "firstName": "Shortcut", "lastName": "Workshop"}
    r = requests.get("http://api.icndb.com/jokes/random", params=params)
    body = r.json()
    print(body)

main()
