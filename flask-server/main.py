from flask import Flask, request
app = Flask(__name__)




@app.route('/')
def get_sentiment():
    return 'Good or Bad, Who can really say?'



@app.route('/interested-topic', methods=['GET', 'POST'])
def get_interested_topic():
    if (request.method == 'POST'):
        topic = request.form.get('topic')
        return f'''<h1> Getting the most recent healthy conversations on {topic} for you'''

    return '''<form method = "POST">
                Topic: <input type="text" name="topic"><br>
                <input type="submit" value="Submit">
                </form>'''


@app.route('/login')



def get_sentiment_for_hashtag():
    return None


if __name__ == '__main__':
    app.run(debug=True, port=5000)