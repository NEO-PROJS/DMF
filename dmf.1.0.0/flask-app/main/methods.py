from flask import Flask
from flask_mobility import Mobility

def create_app() -> Flask:
    """Create And Initialize Flask App"""
    app = Flask(
        __name__, template_folder='../templates', static_folder='../static'
        )
    Mobility(app)
    return app