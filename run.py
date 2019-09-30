from BackEnd import creat_app

app = creat_app()

if __name__ == "__main__":
    app.run(port = 3000,debug=True)