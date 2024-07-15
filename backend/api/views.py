from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .models import Recipe
from .serializer import RecipeSerializer
from rest_framework.response import Response
# Create your views here.

def home(request):
    return HttpResponse('homepage')

class RecipeViewset(viewsets.ModelViewSet): #provides CRUD
    permission_classes = [permissions.AllowAny]
    queryset = Recipe.objects.all()
#define serializer
    serializer_class = RecipeSerializer

#copied directly from Django REST framework ViewSets documentation
def list(self, request):
        queryset = self.get_queryset() 
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data) #returns the data when we request the list

def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
               serializer.save()
               return Response(serializer.data)
        else:
               return Response(serializer.errors, status = 404)


def retrieve(self, request, pk=None):
        recipe = self.queryset.get(pk=pk) #primary key needs to be the same as the url
        serializer = self.serializer_clasrr(recipe)
        return Response(serializer.data)

def update(self, request, pk=None):
        recipe = self.queryset.get(pk=pk)
        serializer = self.serializer_class(recipe, data=request.data)
        if serializer.is_valid():
               serializer.save()
               return Response(serializer.data)
        else:
               return Response(serializer.errors, status = 404)


def destroy(self, request, pk=None):
         recipe = self.queryset.get(pk=pk)
         recipe.delete()
         return Response(status = 204)

