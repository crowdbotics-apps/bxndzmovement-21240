from rest_framework import serializers
from location.models import TaskLocation, CustomerLocation, TaskerLocation, MapLocation


class MapLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapLocation
        fields = "__all__"


class TaskLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskLocation
        fields = "__all__"


class CustomerLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerLocation
        fields = "__all__"


class TaskerLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskerLocation
        fields = "__all__"
