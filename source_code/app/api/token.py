from flask import Blueprint, current_app, jsonify
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer

from app.models.user import User
from app.validators.forms import ClientForm

Token = Blueprint('token', __name__)


@Token.route('/login', methods=['POST'])
def get_token():
    form = ClientForm().validate_for_api()
    expiration = current_app.config['TOKEN_EXPIRATION']
    identity = User.verify(username=form.username.data, password=form.secret.data)
    token = generate_auth_token(identity['uid'], identity['is_admin'], expiration)
    t = {
        'token': token.decode('ascii')
    }
    return jsonify(t), 201


def generate_auth_token(uid, is_admin=None,
                        expiration=7200):
    s = Serializer(current_app.config['SECRET_KEY'],
                   expires_in=expiration)
    return s.dumps({
        'uid': uid,
        'is_admin': is_admin
    })
