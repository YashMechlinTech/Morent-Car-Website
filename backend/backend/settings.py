from pathlib import Path
import os
import ssl
ssl._create_default_https_context=ssl._create_unverified_context

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-#$rhiv*4%7!d)e##m^$r&j=gbp3jjk!wb@thdd%q5+vki#t7^('

# SECURITY WARNING: don't run with debug turned on in production!


ALLOWED_HOSTS = ["localhost", ".vercel.app","127.0.0.1"]


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "cars",
    "corsheaders",
    "storages",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
]

# REST_FRAMEWORK={'DEFAULT_PERMISSION_CLASSES':['rest_framework.permission.AllowAny']}

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "https://dnkzqbcvonlvdosokffc.supabase.co",
]

# If you want to allow all origins (not recommended for production):
# CORS_ALLOW_ALL_ORIGINS = True

# You can also specify the allowed HTTP methods (optional):
CORS_ALLOW_METHODS = [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
]

# And allowed headers (optional):
CORS_ALLOW_HEADERS = [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
]

CORS_ALLOW_CREDENTIALS = True


ROOT_URLCONF = "backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.sqlite3",
#         "NAME": BASE_DIR / "db.sqlite3",
#     }
# }

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "postgres",
        "USER": "postgres.dnkzqbcvonlvdosokffc",
        "PASSWORD": "YashMechlinTech",
        "HOST": "aws-0-ap-south-1.pooler.supabase.com",
        "PORT": "6543",
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

DEBUG = True
STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(
    BASE_DIR, "staticfiles"
)  # Collected static files will be here

# STATICFILES_DIRS = [
#     os.path.join(BASE_DIR, 'static'),  # Local static files
#     # Add any other directories that contain static files
# ]

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


MEDIA_ROOT = os.path.join(BASE_DIR, "media")


# Configure the default file storage
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
DEFAULT_FILE_STORAGE = "storages.backends.s3.S3Storage"

# Supabase storage configuration
# AWS_ACCESS_KEY_ID = '9ebc15019aa6046dfaec3bf3646ec237'
# AWS_SECRET_ACCESS_KEY = '2b881685bed246d312391d40a1aa8d602d33cf015caec360cc5bff292f37d46a'
# AWS_STORAGE_BUCKET_NAME = 'media'
# AWS_S3_ENDPOINT_URL = 'https://dnkzqbcvonlvdosokffc.supabase.co/storage/v1/s3'
# AWS_S3_REGION_NAME = 'ap-south-1'  # Replace with your region
# AWS_S3_FILE_OVERWRITE = False
# AWS_DEFAULT_ACL = 'public-read'  # This makes files publicly accessible

# AWS_ACCESS_KEY_ID = '9ebc15019aa6046dfaec3bf3646ec237'
# AWS_SECRET_ACCESS_KEY = '2b881685bed246d312391d40a1aa8d602d33cf015caec360cc5bff292f37d46a'

# if AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY:        
#     AWS_STORAGE_BUCKET_NAME = 'media'
#     AWS_S3_SIGNATURE_NAME = 's3v4'
#     AWS_S3_REGION_NAME = 'ap-south-1'
#     AWS_S3_FILE_OVERWRITE = False
#     AWS_DEFAULT_ACL = 'public-read'
#     AWS_S3_VERIFY = True
#     DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'


# STORAGES = {
#     "default": {
#         "BACKEND": "storages.backends.s3.S3Storage",
#         "OPTIONS": {
#             "access_key": "9ebc15019aa6046dfaec3bf3646ec237",
#             "secret_key": "2b881685bed246d312391d40a1aa8d602d33cf015caec360cc5bff292f37d46a",
#             "bucket_name": "media",
#             "region_name": "ap-south-1",
#             "file_overwrite": False,
#             "default_acl": "public-read",
#             "signature_version": "s3v4",
#         },
#      },
#         "staticfiles": {
#         "BACKEND": "django.core.files.storage.FileSystemStorage",
#         "OPTIONS": {
#             "location": "static",  # Where your static files will be stored on the server
#             "base_url": "/static/",  # The base URL used to serve static files
#         },
#     },
    
# }


# Use the S3Boto3Storage backend for default file storage
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

# Supabase S3 configuration
AWS_ACCESS_KEY_ID = '9ebc15019aa6046dfaec3bf3646ec237'
AWS_SECRET_ACCESS_KEY = '2b881685bed246d312391d40a1aa8d602d33cf015caec360cc5bff292f37d46a'
AWS_STORAGE_BUCKET_NAME = 'test'
AWS_S3_ENDPOINT_URL = 'https://dnkzqbcvonlvdosokffc.supabase.co/storage/v1/s3'
AWS_S3_REGION_NAME = 'ap-south-1'  # Replace with your Supabase region
AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.ap-south-1.supabase.co'
AWS_S3_SIGNATURE_VERSION = 's3v4'
AWS_DEFAULT_ACL = None # Recommended for security

# Optional settings
# AWS_QUERYSTRING_AUTH = False