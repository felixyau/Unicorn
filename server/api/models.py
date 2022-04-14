
#from django.contrib.postgres.fields import JSONField
from django.db import models

# Create your models here.


# class Product(models.Model):
#     name = models.CharField(max_length=200, null=False, blank=False)
#     category = models.CharField(max_length=100, null=False, blank=False)
#     price = models.DecimalField(max_digits=4, decimal_places=2)
#     description = models.TextField()
#     stars = models.IntegerField()

#     def __str__(self):
#         return self.name

class Questions(models.Model):

    q = models.CharField(max_length=200, null=False, blank=False, default = "null")
    options = models.JSONField(default = {})

    def __str__(self):
        return self.q


class UserResponse(models.Model):
    #enum gender,Normal status, Binary
    class Gender(models.IntegerChoices):
        MALE = 1
        FEMALE = 2
    class Normal(models.IntegerChoices):
        NORMAL = 1
        ABOVE_NORMAL = 2
        WELL_ABOVE_NORMAL = 3
    class Binary(models.IntegerChoices):
        YES = 0
        NO = 1

    age = models.IntegerField()
    height = models.IntegerField()
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    gender = models.IntegerField(choices = Gender.choices)
    ap_hi = models.IntegerField()
    ap_lo = models.IntegerField()
    cholesterol = models.IntegerField(choices = Normal.choices)
    gluc = models.IntegerField(choices = Normal.choices)
    smoke = models.IntegerField(choices = Binary.choices)
    alco = models.IntegerField(choices = Binary.choices)
    active = models.IntegerField(choices = Binary.choices)
    cardio = models.IntegerField(choices = Binary.choices)

    def __str__(self):
        return self.age
