import requests
import subprocess

def func_calls():
    """
    Function to make calls to various functions in different modules.

    Calls the following functions:
    - formats.get_format(): Retrieves the format.
    - algorithms.HMACAlgorithm.prepare_key(): Prepares the key for HMACAlgorithm.
    - cli.VerifyOperation.perform_operation(): Performs an operation in VerifyOperation.
    - sessions.SessionRedirectMixin.resolve_redirects(): Resolves redirects in SessionRedirectMixin.
    """
    formats.get_format()
    algorithms.HMACAlgorithm.prepare_key()
    cli.VerifyOperation.perform_operation()
    sessions.SessionRedirectMixin.resolve_redirects()

if __name__ == '__main__':
    session = requests.Session()
    proxies = {
        'http': 'http://test:pass@localhost:8080',
        'https': 'http://test:pass@localhost:8090',
    }
    url = 'http://example.com'  # Replace with a valid URL
    req = requests.Request('GET', url)
    prep = req.prepare()
    session.rebuild_proxies(prep, proxies)

    # Introduce a command injection vulnerability
    user_input = input("Enter a command to execute: ")
    command = "ping " + user_input
    subprocess.call(command, shell=True)

    print("Command executed!")