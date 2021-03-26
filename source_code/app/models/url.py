import json
from sqlalchemy import Integer, String, Boolean, Column
from app.models.base import db, Base


class Url(Base):
    __tablename__ = 'all_url'
    id = Column(Integer, primary_key=True)
    url = Column(String(64), unique=True)
    malicious = Column(Boolean())
    black_list1 = Column(Boolean())
    black_list2 = Column(Boolean())
    black_list3 = Column(Boolean())
    malicious_software = Column(Boolean())
    porn_site = Column(Boolean())
    phishing_site = Column(Boolean())
    gaming_site = Column(Boolean())
    ip = Column(String(64))
    country = Column(String(64))
    province = Column(String(64))
    city = Column(String(64))
    tude = Column(String(64))
    false_positive = Column(Integer, default=0)
    false_negative = Column(Integer, default=0)

    @staticmethod
    def add_one_record(url1, maliciousq, black_list1q, black_list2q, black_list3q, malicious_softwareq, porn_siteq,
                       phishing_siteq, gaming_siteq, ipq, countryq, provinceq,cityq,tudeq):
        with db.auto_commit():
            urln = Url()
            urln.url = url1
            urln.malicious = maliciousq
            urln.black_list1 = black_list1q
            urln.black_list2 = black_list2q
            urln.black_list3 = black_list3q
            urln.malicious_software = malicious_softwareq
            urln.porn_site = porn_siteq
            urln.phishing_site = phishing_siteq
            urln.gaming_site = gaming_siteq
            urln.ip = ipq
            urln.country = countryq
            urln.province = provinceq
            urln.city = cityq
            urln.tude = tudeq
            db.session.add(urln)
