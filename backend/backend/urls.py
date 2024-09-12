from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from cars import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter()

router.register("cars", views.CarModelViewSet, basename="cars")


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    path("auth/", include("accounts.urls")),
    path(
        "cars/<int:car_id>/toggle_favorite/",
        views.toggle_favorite,
        name="toggle_favorite",
    ),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# if settings.DEBUG :
#     urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# if settings.DEBUG or not settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
