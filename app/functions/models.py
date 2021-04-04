from django.db import models

# Create your models here.
class policyPersonalInfo(models.Model):
    # Personal Details
    proposer_fname = models.CharField(max_length=64)
    proposer_mname = models.CharField(max_length=64)
    proposer_lname = models.CharField(max_length=64)
    father_fname = models.CharField(max_length=64)
    father_mname = models.CharField(max_length=64)
    father_lname = models.CharField(max_length=64)
    mother_fname = models.CharField(max_length=64)
    mother_mname = models.CharField(max_length=64)
    mother_lname = models.CharField(max_length=64)
    proposer_age = models.IntegerField()
    proposer_dob = models.DateField()
    proposer_pob = models.CharField(max_length=256)
    proposer_address = models.CharField(max_length=256)
    proposer_pincode = models.IntegerField()
    proposer_height = models.CharField(max_length=4)
    proposer_weight = models.CharField(max_length=4)
    proposer_education = models.CharField(max_length=128)
    proposer_phone = models.IntegerField()
    proposer_email = models.CharField(max_length=64)

    # Occupational Details
    proposer_occupation = models.CharField(max_length=16)
    proposer_aaincome = models.CharField(max_length=16)
    proposer_business = models.CharField(max_length=64)
    proposer_baddress = models.CharField(max_length=64)
    employer_name = models.CharField(max_length=64)
    job_period = models.CharField(max_length=8)
    job_post = models.CharField(max_length=32)
    job_address = models.CharField(max_length=256)

    # Nominee Details
    nominee_fname = models.CharField(max_length=64)
    nominee_mname = models.CharField(max_length=64)
    nominee_lname = models.CharField(max_length=64)
    nominee_relation = models.CharField(max_length=64)
    nominee_age = models.CharField(max_length=4)

    # Family History

    # Collected Documents
    collected_documents = models.CharField(max_length=64)
    proposer_signature = models.FileField()
    pass_photo = models.FileField()
    aadhar_card = models.FileField()
    pan_card = models.FileField()
    driving_license = models.FileField()
    school_certificate = models.FileField()
    bank_passbook = models.FileField()

    
 
