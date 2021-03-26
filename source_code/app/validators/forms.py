from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, length, Email, Regexp
from wtforms import ValidationError
from app.models.user import User
from app.validators.base import BaseForm as Form


class ClientForm(Form):
    username = StringField(validators=[DataRequired(message='Username is not allowed to be empty'), length(
        min=3, max=12
    )])
    secret = StringField(validators=[DataRequired(message='Password is not allowed to be empty'), length(
        min=6, max=32
    )])
