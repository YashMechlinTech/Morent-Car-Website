from django.db import models

# Create your models here.
class Car(models.Model):
    name=models.CharField(max_length=100)
    image_url=models.FileField(upload_to='carImages/')
    description=models.TextField()
    price=models.DecimalField(max_digits=10,decimal_places=2)

    def __str__(self):
        return self.name  #show own name in admin panel 
    