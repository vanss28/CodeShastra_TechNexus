# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'first_name', 'last_name']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
class TokenObtainPairSerializer(serializers.Serializer):
    default_error_messages = {
        'no_active_account': 'No active account found with the given credentials'
    }
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            user = User.objects.filter(username=username).first()
            if user and user.check_password(password):
                if not user.is_active:
                    raise serializers.ValidationError(self.error_messages['no_active_account'])
                refresh = RefreshToken.for_user(user)
                return {
                    'username': user.username,
                    'user': user,  # Include the user key in the validated data
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }
        raise serializers.ValidationError('Unable to login with provided credentials.')
