from django.urls import path, include
from .views import RecipeViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('recipe', RecipeViewset, basename='recipe')
urlpatterns = [
    path('', include(router.urls)),
]

#urlpatterns = [
 #   path('', home)
#]