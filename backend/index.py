from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

# Configuración de Supabase
SUPABASE_URL = 'https://pmeyljnlkxkxmthnhlxp.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZXlsam5sa3hreG10aG5obHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDA5NTQyMywiZXhwIjoyMDE1NjcxNDIzfQ.1I7k-inbYEKXGThoQQKf9T4SZ-EXJafJyxGeMUZ2REI'

# Ruta para obtener datos desde Supabase
@app.route('/api/data', methods=['GET'])
def get_data():
    headers = {
        'apikey': SUPABASE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
    }
    response = requests.get(f'{SUPABASE_URL}/table', headers=headers)
    data = response.json()
    return jsonify(data)

# Ruta para renderizar el HTML
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
