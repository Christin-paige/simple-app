# Generated by Django 4.2.14 on 2024-07-14 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0007_alter_recipe_pic"),
    ]

    operations = [
        migrations.AlterField(
            model_name="recipe",
            name="pic",
            field=models.ImageField(default="no_picture.jpg", upload_to="recipe/"),
        ),
    ]
