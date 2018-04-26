import flask

app = flask.Flask(__name__, static_folder="../static/dist", template_folder="../static")


@app.route("/")
def index():
    return flask.render_template("index.html")

@app.route('/api')
def api_get():

    response = {
        "data1": "data1",
        "data2": "data2",
        "data3": "data3",
        "data4": "data4",
        "data5": "data5",
        "data11": "data11"
    }

    return flask.jsonify({"response": response})


@app.route('/api', methods=['POST'])
def api_post():

    print("TESTTEST")
    response = {
        "data1": "data1",
        "data2": "data2",
        "data3": "data3",
        "data4": "data4",
        "data5": "data5",
        "data10": "data10"
    }

    return flask.jsonify({"response": response})


if __name__=='__main__':
    app.run('127.0.0.1', port=8000, debug=True)
