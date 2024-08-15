from flask_restx import fields

class NullableInteger(fields.Integer):
    __schema_type__ = ["integer", "null"]
    __schema_example__ = "nullable integer"


class NullableString(fields.String):
    __schema_type__ = ["string", "null"]
    __schema_example__ = "nullable string"


class NullableDatetime(fields.DateTime):
    __schema_type__ = ["string", "null"]
    __schema_example__ = "nullable Datetime"

