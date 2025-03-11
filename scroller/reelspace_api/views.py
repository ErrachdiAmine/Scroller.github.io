from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from reelspace.models import User, Post
from .serializers import UserSerializer, PostSerializer
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication  # Add TokenAuthentication


# Existing views...

@api_view(['GET'])
def check_login_status(request):
    if request.user.is_authenticated:
        return Response({'is_logged_in': True, 'username': request.user.username})
    return Response({'is_logged_in': False})

class UserView(APIView):
    permission_classes = [AllowAny]  # Allow any user to access this view
    authentication_classes = [TokenAuthentication]  # Add TokenAuthentication for authorization
    def get(self, request):  # Ensure authorization is checked
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetailsView(APIView):
    def get(self, request, pk):  # Ensure authorization is checked
        try:
            user = User.objects.get(pk=pk)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
            serializer = UserSerializer(user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
            

class PostsView(APIView):
    permission_classes = [IsAuthenticated]  # Require authentication for this view
    authentication_classes = [TokenAuthentication]  # Add TokenAuthentication for authorization
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = PostSerializer(data=request.data) 
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
