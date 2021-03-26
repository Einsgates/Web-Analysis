from flask import Flask


def register_blueprints(app):
    from app.api.main import url
    app.register_blueprint(url)


def register_plugin(app):
    from app.models.base import db
    db.init_app(app)
    with app.app_context():
        db.create_all()


def create_app(config=None):
    app = Flask(__name__)
    app.config.from_object('app.config.settings')
    app.config.from_object('app.config.secure')
    register_blueprints(app)
    register_plugin(app)
