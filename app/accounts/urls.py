from django.urls import path
from accounts import views

urlpatterns = [
    path('login/', views.loginView, name="login"),
    path('register/', views.registerView, name="register"),
    path('forgotPassword/', views.forgotPasswordView, name="forgotPassword"),
    path('resetPassword/', views.resetPasswordView, name="resetpassword")
]