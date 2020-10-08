from django.contrib import admin
from .models import TaskLocation, CustomerLocation, TaskerLocation, MapLocation

admin.site.register(MapLocation)
admin.site.register(TaskLocation)
admin.site.register(CustomerLocation)
admin.site.register(TaskerLocation)

# Register your models here.
