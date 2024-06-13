from django.db import models

# Create your models here.
class Meeting(models.Model):
    class Type(models.TextChoices):
        CONFIRM = "confime"
        PASSE = 'pass'
        EN_ATTENTE = 'wait'
        DISPONIBLE = 'dispo'
        REFUSE = 'refuse'

    class Moment(models.TextChoices):
        MORNING = "morning"
        EVENING = 'evening'

    title = models.fields.CharField(max_length=50)
    motif = models.fields.CharField(max_length=50)
    client = models.fields.CharField(max_length=50)
    description = models.fields.CharField(max_length=100)
    type = models.fields.CharField(choices=Type.choices, max_length=10)
    moment = models.fields.CharField(choices=Moment.choices, max_length=20)
    date = models.fields.CharField(max_length=50)
    duration = models.fields.CharField(max_length=50)

    def __str__(self):
	    return f'{self.title}'