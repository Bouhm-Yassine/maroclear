from flask_restx import Api
from flask import Blueprint

blueprint = Blueprint("api", __name__)

api = Api(
    blueprint,
    title="OC-V:0.1",
    version="0.1",
    description="Office des Changes API",
)


