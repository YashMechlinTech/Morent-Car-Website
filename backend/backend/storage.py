from django.core.files.storage import Storage
from django.conf import settings
from supabase import create_client, Client

class SupabaseStorage(Storage):
    def __init__(self, bucket_name=None, **kwargs):
        self.bucket_name = bucket_name or 'media'
        url = settings.SUPABASE_URL
        key = settings.SUPABASE_API_KEY
        self.supabase: Client = create_client(url, key)
        self.storage_client = self.supabase.storage()

    def _open(self, name, mode='rb'):
        # Implement logic to open a file from Supabase
        pass

    def _save(self, name, content):
        content_file = content.file
        content_file.seek(0)  # Move the file pointer to the beginning
        content_bytes = content_file.read()
        self.storage_client.from_(self.bucket_name).upload(name, content_bytes, {"content-type": content.content_type})
        return name

    def exists(self, name):
        response = self.storage_client.from_(self.bucket_name).get(name)
        return response.status_code == 200

    def url(self, name):
        return f"{settings.SUPABASE_URL}/storage/v1/object/public/{self.bucket_name}/{name}"
