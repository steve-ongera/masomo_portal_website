import json
from django.conf import settings
from django.core.mail import send_mail
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from .models import ContactMessage

@csrf_exempt  # public JSON endpoint called by the React app
@require_POST
def contact(request):
    try:
        data = json.loads(request.body or "{}")
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)

    fields = {k: str(data.get(k, "")).strip() for k in ("name", "email", "subject", "message")}
    if not all(fields.values()):
        return JsonResponse({"error": "All fields are required"}, status=400)
    try:
        validate_email(fields["email"])
    except ValidationError:
        return JsonResponse({"error": "Invalid email"}, status=400)

    obj = ContactMessage.objects.create(**fields)
    send_mail(
        f"[Masomo Portal] {obj.subject}",
        f"From: {obj.name} <{obj.email}>\n\n{obj.message}",
        settings.CONTACT_NOTIFY_EMAIL, [settings.CONTACT_NOTIFY_EMAIL], fail_silently=True,
    )
    return JsonResponse({"id": obj.id, "status": "received"}, status=201)
