from flask import Flask, request, jsonify
from flask_pydantic_spec import FlaskPydanticSpec, Response, Request
from pydantic import BaseModel

#swagger: http://127.0.0.1:5000/apidoc/swagger#/

app = Flask(__name__)
spec = FlaskPydanticSpec('flask', title='My API', version='1.0.0', openapi_version='3.0.2')
spec.register(app)

class Pessoa(BaseModel):
    id: int
    nome: str
    idade: int

@app.route("/")
@spec.validate(resp=Response(HTTP_200=Pessoa))
def hello_world():
    return "<p>Hello, World!</p> <p>Olá, mundo!</p>"

@app.route("/menezes")
@spec.validate(resp=Response(HTTP_200=Pessoa))
def obter_menezes():
    return "<h1>Menezes não pode criar repositórios</h1>"

@app.get("/pessoas")
def pessoas():
    return jsonify([])  # Simulando uma lista vazia

@app.post('/pessoas')
@spec.validate(body=Request(Pessoa), resp=Response(HTTP_200=Pessoa))
def pessoa():
    body = request.get_json()  # Obter o corpo da requisição como JSON
    pessoa = Pessoa(**body)    # Validação e criação do objeto Pydantic
    return jsonify(pessoa.dict())  # Retorna o objeto validado como JSON

if __name__ == "__main__":
    app.run(debug=True)
