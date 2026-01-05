from django.contrib import admin
from django.urls import path
from quizapp import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Admin site
    path('admin/', admin.site.urls),

    # Home page
    path('', views.h, name='home'),

    # Dashboards
    path('admin-dashboard/', views.AdminDashboard, name='admin_dashboard'),
     path('UserDashboard/', views.UserDashboard, name='UserDashboard'),

    # Authentication
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),

    # Quiz pages
    path('geography/', views.geography_quiz, name='geography_quiz'),
    path('history/', views.history_quiz, name='history_quiz'),  # corrected typo "hostory" -> "history"
    path('science/', views.science_quiz, name='science_quiz'),

    # Quiz categories and recent quizzes
    path('quiz-categories/', views.quiz_categories, name='quiz_categories'),
    path('recent-quiz/', views.recent_quiz, name='recent_quiz'),
]

# Serve static files in development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
