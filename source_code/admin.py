from app import create_app
from app.models.base import db
from app.models.user import User

app = create_app()
with app.app_context():
    with db.auto_commit():
        # 创建一个超级管理员
        user = User()
        user.username = 'admin'
        user.password = '20001127000'
        user.auth = 2
        db.session.add(user)