from flask import Flask
from .app import create_app
from flask_cors import CORS


def register_blueprints(app):
    from app.api.main import Check
    from app.api.user import Users
    from app.api.token import Token
    app.register_blueprint(Check)
    app.register_blueprint(Users)
    app.register_blueprint(Token)


def register_plugin(app):
    from app.models.base import db
    db.init_app(app)
    with app.app_context():
        #        db.drop_all()
        db.create_all()


def create_app():
    #static_folder="../dist1/static", template_folder="../dist1"
    app = Flask(__name__,static_folder="../dist1/static", template_folder="../dist1")
    CORS(app)
    app.config.from_object('app.config.settings')
    app.config.from_object('app.config.secure')
    register_blueprints(app)
    register_plugin(app)
    return app
