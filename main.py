from jwt import algorithms
from django.utils import formats
from rsa import cli
from requests import sessions
from requests import Request
import request

if __name__ == '__main__':
    formats.get_format()
    algorithms.HMACAlgorithm.prepare_key()
    cli.VerifyOperation.perform_operation()
    sessions.SessionRedirectMixin.resolve_redirects()
    session = requests.Session()
    proxies = {
        'http': 'http://test:pass@localhost:8080',
    }
    req = Request('GET', url)
    prep = req.prepare()
    session.rebuild_proxies(prep, proxies)