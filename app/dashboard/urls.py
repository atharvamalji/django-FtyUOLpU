from django.urls import path
from dashboard import views

urlpatterns = [
    path('dashboard/', views.dashboardView, name="dashboard"),
    path('addPolicy/', views.addPolicyView, name="addPolicy")
]