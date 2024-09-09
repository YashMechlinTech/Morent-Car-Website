from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate,login as auth_login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
import json

@api_view(['POST'])
def register(request):
    data = request.data
    
    # Basic validation
    required_fields = ['full_name', 'email', 'password', 'confirm_password']
    for field in required_fields:
        if field not in data:
            return Response({"error": f"{field} is required"}, status=status.HTTP_400_BAD_REQUEST)
    
    if data['password'] != data['confirm_password']:
        return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)

    # Check if user already exists
    if User.objects.filter(email=data['email']).exists():
        return Response({"error": "User with this email already exists"}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        user = User.objects.create(
            username=data['email'],  # Using email as username
            email=data['email'],
            password=make_password(data['password']),
            first_name=data['full_name'],  # Save full_name to first_name
        )
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@require_POST
def login(request):
    try:
        # Parse the JSON request body
        data = json.loads(request.body.decode('utf-8'))
        email = data.get('email')
        password = data.get('password')

        # Authenticate the user
        user = authenticate(request, username=email, password=password)

        if user is not None:
            auth_login(request, user)
            return JsonResponse({'message': 'Login successful'}, status=200)
        else:
            return JsonResponse({'error': 'Invalid email or password'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)