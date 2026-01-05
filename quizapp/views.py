from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.models import User
from datetime import date


# Home page
def h(request):
    return render(request, 'h.html')


# -----------------------------
# Admin Dashboard
# -----------------------------
@login_required
def AdminDashboard(request):
    return render(request, 'Admindashboard.html')


# -----------------------------
# User Dashboard
# -----------------------------
@login_required
def UserDashboard(request):
    user = request.user
    profile = getattr(user, 'profile', None)  # in case profile is not set

    recent_quizzes = [
        {"name": "Organic Chemistry I", "date": date(2025, 10, 24), "score": 92, "color": "green"},
        {"name": "World Geography", "date": date(2025, 10, 22), "score": 74, "color": "orange"},
    ]

    achievements = [
        {"name": "☀️ Early Bird", "opacity": 1},
        {"name": "💯 Perfect Century", "opacity": 1},
        {"name": "🔒 Scholar (3 left)", "opacity": 0.5},
    ]

    recommended_quizzes = [
        {
            "title": "Advanced Python Decorators",
            "description": "Level up your coding with functional programming concepts.",
            "difficulty": "Medium",
        },
        {
            "title": "World Capitals Masterclass",
            "description": "You're great at Geography! Try to beat the global average.",
            "difficulty": "Easy",
        },
    ]

    context = {
        "user": user,
        "profile": profile,
        "recent_quizzes": recent_quizzes,
        "achievements": achievements,
        "recommended_quizzes": recommended_quizzes,
    }

    return render(request, "UserDashboard.html", context)


# -----------------------------
# Quiz Views
# -----------------------------
def geography_quiz(request):
    return render(request, 'Geography.html')  # fixed spelling


def history_quiz(request):
    return render(request, 'history.html')  # fixed spelling


def science_quiz(request):
    category = {
        "name": "Science",
        "icon": "fas fa-flask",
        "level": "Intermediate",
        "time": "15:00",
        "badge": "Science Explorer",
        "decorations": [{"class": "atom", "symbol": "⚛️"}, {"class": "flask", "symbol": "🧪"}],
        "questions": [
            {"text": "What is H2O?", "options": ["Water", "Oxygen", "Hydrogen"], "answer": "Water"},
            {"text": "What planet is known as the Red Planet?", "options": ["Mars", "Venus", "Jupiter"], "answer": "Mars"}
        ],
        "stats": {
            "physicsCount": 0,
            "chemistryCount": 0,
            "biologyCount": 0,
            "astronomyCount": 0
        }
    }
    return render(request, "science.html", {"category": category})


def quiz_categories(request):
    return render(request, 'quiz_categories.html')


def recent_quiz(request):
    return render(request, 'recentQuiz.html')


# -----------------------------
# Authentication Views
# -----------------------------
def login_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            return redirect('admin_dashboard')  # updated to lowercase URL
        else:
            messages.error(request, "Invalid email or password")

    return render(request, 'login.html')


def signup_view(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        password = request.POST.get("password")

        if User.objects.filter(username=email).exists():
            error_message = "User with this email already exists."
            return render(request, "signup.html", {"error_message": error_message, "form": request.POST})

        # Create user
        user = User.objects.create_user(username=email, email=email, password=password, first_name=name)
        user.save()
        messages.success(request, "Account created successfully. Please log in.")
        return redirect("login")

    return render(request, "signup.html")
