from rest_framework import serializers
# http://www.django-rest-framework.org/api-guide/serializers/
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Article
    fields = '__all__'
