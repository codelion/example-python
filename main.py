import requests
import subprocess
from django.http import JsonResponse

def func_calls():
    formats.get_format()
    algorithms.HMACAlgorithm.prepare_key()
    cli.VerifyOperation.perform_operation()
    sessions.SessionRedirectMixin.resolve_redirects()

if __name__ == '__main__':
    from django.urls import path
    from django.views.decorators.http import require_http_methods
    from django.http import HttpResponse

    @require_http_methods(["GET"])
    def health(request):
        return HttpResponse("ok")

    urlpatterns = [
        path('health', health)
    ]
