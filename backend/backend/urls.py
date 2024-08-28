from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from cars import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cars/',views.CarListView.as_view(),name='car-list')
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



# if settings.DEBUG :
#     urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    
# if settings.DEBUG or not settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


