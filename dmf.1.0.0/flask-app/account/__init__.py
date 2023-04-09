from flask import (
    Blueprint, redirect, url_for, render_template, request as req
)
from main.decorators import device_detect

acc_app = Blueprint(
    name="acc_app", import_name=__name__, template_folder="../templates",
    static_folder="../static"
)

@acc_app.route('/', methods=['GET'])
@device_detect
def root(**kwargs):
    vue_app = kwargs.get('vue_app')
    return redirect(url_for('acc_app.acc_panel'))

@acc_app.route('/panel/', methods=['GET'])
@device_detect
def acc_panel(**kwargs):
    vue_app = kwargs.get('vue_app')
    return render_template(f'{vue_app}/account.html')

@acc_app.route('/login/', methods=['GET'])
@device_detect
def acc_login(**kwargs):
    vue_app = kwargs.get('vue_app')
    return render_template(f'{vue_app}/account.html')

@acc_app.route('/signup/', methods=['GET'])
@device_detect
def acc_signup(**kwargs):
    vue_app = kwargs.get('vue_app')
    return render_template(f'{vue_app}/account.html')