# Generated by Django 4.2.14 on 2024-07-13 15:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0004_rename_ingredient_recipeingredient_ingredients"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="recipeingredient",
            name="ingredients",
        ),
        migrations.RemoveField(
            model_name="recipeingredient",
            name="recipe",
        ),
        migrations.RemoveField(
            model_name="recipe",
            name="comments",
        ),
        migrations.AddField(
            model_name="recipe",
            name="ingredients",
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.DeleteModel(
            name="Ingredient",
        ),
        migrations.DeleteModel(
            name="RecipeIngredient",
        ),
    ]
