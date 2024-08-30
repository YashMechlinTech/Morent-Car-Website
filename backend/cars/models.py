# models.py
from django.db import models
from backend.storage import SupabaseStorage  # Import your custom storage class

class Car(models.Model):
    name = models.CharField(max_length=100)
    image_url = models.FileField(
        upload_to='carImages/',  # Path within your Supabase bucket
        storage=SupabaseStorage(),  # Use your custom Supabase storage backend
    )
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
