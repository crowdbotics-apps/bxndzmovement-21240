from django.contrib import admin
from .models import Task, Message, TaskTransaction, Rating

admin.site.register(TaskTransaction)
admin.site.register(Rating)
admin.site.register(Task)
admin.site.register(Message)

# Register your models here.
