# Generated by Django 4.2.11 on 2024-09-11 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0006_car_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='car_type',
            field=models.CharField(blank=True, choices=[('Sport', 'Sport'), ('SUV', 'SUV'), ('MPV', 'MPV'), ('Sedan', 'Sedan'), ('Coupe', 'Coupe'), ('Hatchback', 'Hatchback')], default='sedan', max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='car',
            name='steering',
            field=models.CharField(blank=True, choices=[('Manual', 'Manual'), ('Automatic', 'Automatic')], default='manual', max_length=10, null=True),
        ),
    ]