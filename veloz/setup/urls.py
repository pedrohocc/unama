from django.contrib import admin
from django.conf.urls.static import static
from django.urls import include, path
from setup import settings

urlpatterns = [
    path('', include('estoque.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
