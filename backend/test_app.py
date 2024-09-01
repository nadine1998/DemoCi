# backend/tests/test_app.py

from app import app

def test_get_todos():
    with app.test_client() as client:
        response = client.get('/api/todos')
        assert response.status_code == 200
        data = response.get_json()
        assert len(data) == 3  
