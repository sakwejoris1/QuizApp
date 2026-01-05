from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to="avatars/", blank=True, null=True)
    level = models.PositiveIntegerField(default=1)
    role = models.CharField(max_length=50, default="Scholar")
    current_goal = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.user.username

    @property
    def initials(self):
        names = self.user.get_full_name().split()
        if len(names) >= 2:
            return names[0][0] + names[1][0]
        return self.user.username[:2].upper()
    

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Quiz(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title