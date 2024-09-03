from django.db import models

from django.db import models


class Car(models.Model):
    CAR_TYPE_CHOICES = [
        ("sport", "Sport"),
        ("suv", "SUV"),
        ("mpv", "MPV"),
        ("sedan", "Sedan"),
        ("coupe", "Coupe"),
        ("hatchback", "Hatchback"),
    ]

    CAPACITY_CHOICES = [
        (2, "2 Persons"),
        (4, "4 Persons"),
        (6, "6 Persons"),
        (8, "8 Persons"),
    ]

    STEERING_CHOICES = [
        ("manual", "Manual"),
        ("automatic", "Automatic"),
    ]

    name = models.CharField(max_length=100)
    image_url = models.FileField(upload_to="carimages/")
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    car_type = models.CharField(
        max_length=10, choices=CAR_TYPE_CHOICES, null=True, blank=True, default="sedan"
    )
    capacity = models.IntegerField(
        choices=CAPACITY_CHOICES, null=True, blank=True, default=4
    )
    steering = models.CharField(
        max_length=10, choices=STEERING_CHOICES, null=True, blank=True, default="manual"
    )
    gasoline_capacity = models.DecimalField(
        max_digits=5, decimal_places=1, null=True, blank=True, default=70.0
    )

    def __str__(self):
        return self.name
