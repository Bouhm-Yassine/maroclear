import os
from flask_script import Manager

from app.main.controllers import blueprint
from app.main import create_app, db
from flask_migrate import Migrate, MigrateCommand

app = create_app(os.getenv('APP_ENV') or 'dev')
app.register_blueprint(blueprint)
app.app_context().push()

manager = Manager(app)
migrate = Migrate(app, db, compare_type=True)
manager.add_command('db', MigrateCommand)


@manager.command
def run():
    app.run(port=5000)


if __name__ == '__main__':
    manager.run()
