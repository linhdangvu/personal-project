from django.shortcuts import render, redirect
from django.http import HttpResponse
from reservation.models import Meeting
from reservation.forms import MeetingForm
from django.http import HttpResponseRedirect

# Create your views here.
# rdv = Meeting.objects.all()

def reservation_list(request):
    context = {}
    form = MeetingForm()
    rdv = Meeting.objects.all()
    context["meeting"] = rdv
    context["title"] = 'home'
    if request.method == "POST":
        if 'create' in request.POST:
                form = MeetingForm(request.POST)
                # form.save()
    context["form"] = form
    return render(request, 'reservation/index.html', context)

def meeting_by_date(request):
    pass

def meeting_by_date_moment(request):
    pass

data = []

def create_meeting(request):
    context = {}
    form = MeetingForm()
    rdv = Meeting.objects.all()
    context["meeting"] = rdv
    context["title"] = 'home'
    
    if request.method == "POST":
        if 'create' in request.POST:
                form = MeetingForm(request.POST)
                form.save()
    context["form"] = form
        # meet = Meeting.objects.create("Seconde rdv", "Divorce", "Mme", "desc", "wait", "morning", "12/12/1221", "12:22 - 13:33")      
       
    return render(request, 'reservation/index.html', context)

def delete_meeting():
    pass

def update_meeting():
    pass