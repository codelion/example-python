from jwt import algorithms
from django.utils import formats
from rsa import cli
from requests import sessions
import request

if __name__ == '__main__':
    formats.get_format()
    algorithms.HMACAlgorithm.prepare_key()
    cli.VerifyOperation.perform_operation()
    sessions.SessionRedirectMixin.resolve_redirects()
    session = requests.Session()
    proxies = {
        'http': 'http://localhost:8080',
        'https': 'http://localhost:8090',
    }
    req = requests.Request('GET', url)
    prep = req.prepare()
    session.rebuild_proxies(prep, proxies)