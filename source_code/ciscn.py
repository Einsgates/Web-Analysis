from app import create_app
from app.libs.error import APIException
from app.libs.error_code import ServerError
from werkzeug.exceptions import HTTPException

app = create_app()

@app.errorhandler(Exception)
def frame_workerror(e):
    if isinstance(e, APIException):
        return e
    if isinstance(e, HTTPException):
        code = e.code
        msg = e.description
        error_code = 1007
        return APIException(msg, code, error_code)
    else:
        return ServerError()

if __name__ == '__main__':
    app.run(debug=True)
