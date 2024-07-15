from django.db import models
from django.shortcuts import reverse




#stores recipe and establishes a many-to-many relationship with ingredients, allows me to list ingredients
class Recipe(models.Model):
    name = models.CharField(max_length=120)
    ingredients=models.CharField(max_length=250, blank=True, null=True)
    instructions = models.CharField(max_length=500, blank=True, null=True)
    comments = models.CharField(max_length=500, blank=True, null=True)
    pic = models.ImageField(upload_to='recipe/', default='no_picture.jpg')
    

    def __str__(self):
        return str(self.name)
    
   