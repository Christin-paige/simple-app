from django import forms
from django.forms import ModelForm
from .models import Recipe

class CreateRecipeForm(ModelForm):
    class Meta:
        model = Recipe
        fields = ('name', 'ingredients', 'cooking_time', 'pic' )
        labels = {
            'name': 'Enter the recipe name',
            'ingredients': 'List ingredients separated by a comma',
            'instructions': 'How many minutes does it take to cook?',
            'comments': 'Tell us about the recipe',
            'pic': 'Upload an image of your recipe', 

        }
        widgets = { 
            'name': forms.TextInput(attrs={'class':'form-control'}),
            'ingredients': forms.TextInput(attrs={'class':'form-control'}),
            'instructions': forms.TextInput(attrs={'class':'form-control'}),
            'comments': forms.TextInput(attrs={'class':'form-control'}),
            'pic': forms.FileInput(attrs={'class':'form-control'}),
        }
