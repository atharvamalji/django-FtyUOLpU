from django import forms
from functions.models import policyPersonalInfo

class policyPersonalInfoForm(forms.ModelForm):
    proposer_fname = forms.TextInput
    class Meta:
        model = policyPersonalInfo
        fields = '__all__'