import json
from sqlalchemy import Integer, String, Boolean, Column
from app.models.base import Base, db


class Sum(Base):
    __tablename__ = 'about_all'
    id = Column(Integer, primary_key=True)
    sum = Column(Integer)
    province = Column(String(64))

    @staticmethod
    def add_sum(sum1,province1):
        with db.auto_commit():
            sum = Sum()
            sum.sum = sum1
            sum.province = province1
            db.session.add(sum)
