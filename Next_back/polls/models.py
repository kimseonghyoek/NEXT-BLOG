from django.db import models

# Create your models here.
class User(models.Model) :
  email = models.EmailField(max_length=50)
  nickname = models.CharField(max_length=30)
  pw = models.CharField(max_length=50)
  birth = models.CharField(max_length=8)