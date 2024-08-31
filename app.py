from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

todos = [
    {"id": 1, "title": "Learn Python", "completed": False},
    {"id": 2, "title": "Build a React App", "completed": False},
    {"id": 3, "title": "Create API with Flask", "completed": True},
]

@app.route('/api/todos', methods=['GET'])
def get_todos():
    return jsonify(todos)

if __name__ == '__main__':
    app.run(debug=True)
