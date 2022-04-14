from django.contrib import admin
from . models import Product, Questions, UserResponse

# Register your models here.

admin.site.register(Product)
admin.site.register(Questions)
admin.site.register(UserResponse)
