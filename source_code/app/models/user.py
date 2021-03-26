from sqlalchemy import Integer, String, Boolean, Column, SmallInteger
from werkzeug.security import check_password_hash, generate_password_hash

from app.libs.error_code import AuthFailed, LoginFailed
from app.models.base import db, Base


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String(24), nullable=False)
    auth = Column(SmallInteger, default=1)
    _password = Column('password', String(100))

    def keys(self):
        return ['id', 'username', 'auth']

    @property
    def password(self):
        return self._password

    @password.setter
    def password(self, raw):
        self._password = generate_password_hash(raw)

    @staticmethod
    def register_by_username(name, secret):
        with db.auto_commit():
            user = User()
            user.username = name
            user.password = secret
            db.session.add(user)

    @staticmethod
    def verify(username, password):
        user = User.query.filter_by(username=username).first_or_404()
        if not user.check_password(password):
            raise LoginFailed()
        is_admin = True if user.auth == 2 else False
        return {'uid':user.id,'is_admin':is_admin}


    def check_password(self, raw):
        if not self._password:
            return False
        return check_password_hash(self._password, raw)
