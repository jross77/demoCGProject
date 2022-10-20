from flask import Flask, request, jsonify
from flask_cors import CORS
html = open("index.html").read()
#<strong>#Set up Flaskstrong>:
app = Flask(__name__)
#<strong>#Set up Flask to bypass CORSstrong>:
cors = CORS(app)
#Create the receiver API POST endpoint:
@app.route("/test", methods=["POST"])
def test():
      print(request.get_json())  # parse as JSON
      return 'Sucesss', 200
if __name__ == "__main__": 
   app.run(debug=True)