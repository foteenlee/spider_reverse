from flask import Blueprint, render_template

vw = Blueprint('vw', __name__)


@vw.route('/girl')
def girl():

    return render_template('picgirl.html')