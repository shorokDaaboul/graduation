import csv
from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

CSV_FILE = os.path.join(os.path.dirname(__file__), 'games.csv')

@app.route('/api/games', methods=['GET'])
def get_games():
    games = []
    try:
        with open(CSV_FILE, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                # Convert numeric fields
                row['id'] = int(row['id']) if row['id'] else None
                row['rating'] = float(row['rating']) if row['rating'] else None
                games.append(row)
        return jsonify(games)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 