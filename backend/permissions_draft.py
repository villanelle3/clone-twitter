from rest_framework import permissions

class IsUserOrReadOnly(permissions.BasePermission):
    """
    Custom permission to allow read-only access to users,
    but only allow modification by the user itself.
    """

    def has_object_permission(self, request, view, obj):
        # Allow GET, HEAD, or OPTIONS requests (read-only)
        if request.method in permissions.SAFE_METHODS:
            return True
        
        # Allow modification only if the object belongs to the requesting user
        return obj == request.user
