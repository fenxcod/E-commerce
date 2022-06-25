from django.db import models

from django.contrib.auth.models import User

from project.project import settings

class CustomerProfile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    
    stripe_customer_id = models.CharField(max_length=120)

    # Add additional fields you want to add to the customer profile

import stripe
stripe.api_key = settings.STRIPE_API_KEY