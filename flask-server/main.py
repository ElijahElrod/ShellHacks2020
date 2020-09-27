from flask import Flask, request
import requests
import os
from dotenv import load_dotenv
import twitterauth
import spacy
import json

app = Flask(__name__)

project_folder = os.path.expanduser('~/flask-server')
load_dotenv(os.path.join(project_folder, '.env'))

SECRET = os.getenv("TWITTER_SECRET")
API_KEY = os.getenv("TWITTER_APIKEY")
BEARER_TOKEN = os.getenv("TWITTER_BEARER")

nlp = spacy.load("en_core_web_sm")


# Flask app to get the most recent keywords related to a topic
# Using SpaCy library to do NLP on data retrieved from twitter
#

@app.route('/')
def welcome():
    return '''<h1>Welcome to Convosential</h1>
    <p>Click <a href="topic-keywords">here</a> to find the most popular keywords for a topic of your choosing'''



@app.route('/topic-keywords', methods=['GET', 'POST'])
def get_topic_keywords():
    keyword_dict= dict({})
    
    if (request.method == 'POST'):
        topic = request.form.get('topic')
        url = twitterauth.create_url(topic)
        headers = twitterauth.create_headers(BEARER_TOKEN)
        res = twitterauth.connect_to_endpoint(url, headers)
        for i in range(len(res['statuses'])):
            names = (res['statuses'][i]['text'])
            addKeywordFreqToDict(names, keyword_dict)
        return returnView(topic, keyword_dict)

    return '''<form method = "POST">
                Topic: <input type="text" name="topic"><br>
                <input type="submit" value="Submit">
                </form>'''



def returnView(topic, keyword_dict):
    print("here")
    return keyword_dict



def addKeywordFreqToDict(keyword, dictionary):
    if keyword not in dictionary:
        dictionary[keyword] = 1
    else:
        dictionary[keyword] = dictionary[keyword] + 1



if __name__ == '__main__':
    app.run(debug=True, port=5000)