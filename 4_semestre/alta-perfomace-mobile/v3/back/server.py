from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/media/<string:valor1>/<string:valor2>')
def get(valor1, valor2):
    media = (float(valor1) + float(valor2)) / 2
    return str(media)

if __name__ == '__main__':
    app.run()