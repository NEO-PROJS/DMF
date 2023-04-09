from flask import (
    Blueprint, redirect, url_for, render_template, request as req
)
from main.decorators import device_detect

music_app = Blueprint(
    name="music_app", import_name=__name__, template_folder="../templates",
    static_folder="../static"
)

# Music Root Views
@music_app.route('/', methods=['GET'])
@device_detect
def root(**kwargs):
    return redirect(url_for('music_app.home'))

# Music Home Views
@music_app.route('/home/', methods=['GET'])
@device_detect
def home(**kwargs):
    vue_app = kwargs.get('vue_app')
    return render_template(f'{vue_app}/music.html')

@music_app.route('/home/trends/', methods=['GET'])
@device_detect
def home_trends(**kwargs):
    vue_app = kwargs.get('vue_app')
    return render_template(f'{vue_app}/music.html')

@music_app.route('/home/latests/', methods=['GET'])
@device_detect
def home_latests(**kwargs):
    vue_app = kwargs.get('vue_app')
    return render_template(f'{vue_app}/music.html')

@music_app.route('/home/suggests/', methods=['GET'])
@device_detect
def home_suggests(**kwargs):
    vue_app = kwargs.get('vue_app')
    return render_template(f'{vue_app}/music.html')

# Music Search Views
@music_app.route('/search/', methods=['GET'])
@device_detect
def search(**kwargs):
    vue_app = kwargs.get('vue_app')
    return render_template(f'{vue_app}/music.html')

@music_app.route('/playlists/', methods=['GET'])
@device_detect
def playlists(**kwargs):
    vue_app = kwargs.get('vue_app')
    return render_template(f'{vue_app}/music.html')