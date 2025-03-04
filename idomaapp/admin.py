from django.contrib import admin
from .models import Interest, TradRuller


class InterestAdmin(admin.ModelAdmin):
  list_display = ('title', 'created_at', 'updated_at')

class TradRullerAdmin(admin.ModelAdmin):
  list_display = ('name', 'created_at', 'updated_at')

admin.site.register(Interest, InterestAdmin)
admin.site.register(TradRuller, TradRullerAdmin)