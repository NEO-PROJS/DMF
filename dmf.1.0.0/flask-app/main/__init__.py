from flask import Flask, render_template
from main.methods import create_app

app = create_app()

# Register Blueprints
from music import music_app
from account import acc_app
app.register_blueprint(blueprint=music_app, url_prefix='/music')
app.register_blueprint(blueprint=acc_app, url_prefix='/account')

# Define Main App Views
@app.route('/', methods=['GET'])
def root():
    return 'Root'

@app.route('/about-us/', methods=['GET'])
def about_us():
    return 'About Us'

@app.route('/contact-us/', methods=['GET'])
def contact_us():
    return 'Contact Us'

@app.route('/partnership/', methods=['GET'])
def partnership():
    return 'Partnership'

# End of File