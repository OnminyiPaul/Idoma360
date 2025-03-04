from django.db import models

class Interest(models.Model):
  title = models.CharField(max_length=20, null=False, blank=False)
  description = models.CharField(max_length=250, null=False, blank=False)
  image = models.ImageField(upload_to='pictures/image/', null=False, blank=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateField(auto_now=True)

  def __str__(self):
    return f'{self.title}'


class TradRuller(models.Model):
  name = models.CharField(max_length=40, null=False, blank=False)
  title = models.CharField(max_length=100, blank=False, null=False)
  image = models.ImageField(upload_to='picture/image/', null=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateField(auto_now=True)


  def __str__(self):
    return f'{self.name}'