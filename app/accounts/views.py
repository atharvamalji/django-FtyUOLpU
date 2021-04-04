from django.shortcuts import render

# Create your views here.
def loginView(request):
    return render(request, 'accounts/authentication/login.html')

def registerView(request):
    return render(request, 'accounts/authentication/register.html')

def forgotPasswordView(request):
    return render(request, 'accounts/authentication/forgot_password.html')

def resetPasswordView(request):
    return render(request, 'accounts/authentication/reset_password.html')