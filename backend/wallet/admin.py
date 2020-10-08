from django.contrib import admin
from .models import (
    PaymentTransaction,
    TaskerPaymentAccount,
    TaskerWallet,
    PaymentMethod,
    CustomerWallet,
)

admin.site.register(PaymentTransaction)
admin.site.register(PaymentMethod)
admin.site.register(CustomerWallet)
admin.site.register(TaskerWallet)
admin.site.register(TaskerPaymentAccount)

# Register your models here.
