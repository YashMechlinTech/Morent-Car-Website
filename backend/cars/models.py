from django.db import models


class Car(models.Model):
    CAR_TYPE_CHOICES = [
        ("Sport", "Sport"),
        ("SUV", "SUV"),
        ("MPV", "MPV"),
        ("Sedan", "Sedan"),
        ("Coupe", "Coupe"),
        ("Hatchback", "Hatchback"),
    ]

    CAPACITY_CHOICES = [
        (2, "2 Persons"),
        (4, "4 Persons"),
        (6, "6 Persons"),
        (8, "8 Persons"),
    ]

    STEERING_CHOICES = [
        ("Manual", "Manual"),
        ("Automatic", "Automatic"),
    ]
    LOCATIONS = [
        ("New York", "New York"),
        ("Los Angeles", "Los Angeles"),
        ("Chicago", "Chicago"),
        ("San francisco", "San Francisco"),
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

    location = models.CharField(
        null=True, choices=LOCATIONS, max_length=15, blank=True, default="New York"
    )

    isFavourite=models.BooleanField(default=False)

    def __str__(self):
        return self.name
