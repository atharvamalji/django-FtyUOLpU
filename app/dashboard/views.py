from django.shortcuts import render

from functions.forms import policyPersonalInfoForm

# Create your views here.
def dashboardView(request):
    return render(request, 'dashboard/dashboard.html')

def addPolicyView(request):
    form = policyPersonalInfoForm()
    context = {'form':form}
    return render(request, 'dashboard/add_policy.html', context)