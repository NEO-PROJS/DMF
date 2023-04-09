import functools
from flask import request as req
from user_agents import parse as ua_parser

def device_detect(f):
    """ Detect Device (Mobile, Tablte, ...) To Serve Most Suitable App """
    @functools.wraps(f)
    def decorator(*args, **kwargs):
        user_agent = ua_parser(req.headers.get('User-Agent'))

        vue_app = 'desktop'
        if user_agent.is_mobile:
            vue_app = 'mobile'
        elif user_agent.is_tablet:
            vue_app = 'tablet'

        kwargs.update({'vue_app':vue_app})
        return f(*args, **kwargs)
    return decorator