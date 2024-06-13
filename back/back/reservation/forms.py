from django import forms
from reservation.models import Meeting

class MeetingForm(forms.Form):
    # title = forms.CharField()
    # motif = forms.CharField()
    # client = forms.CharField()
    # description = forms.CharField()
    # date = forms.CharField()
    # duration = forms.CharField()
    # type = forms.ChoiceField (label="Type", choices = Meeting.Type.choices, required= False)
    # moment = forms.ChoiceField (label="Moment", choices = Meeting.Moment.choices, required= False)

    class Meta:
        model = Meeting
        fields = ['Title', 'Motif', 'Client', 'Description','Date', 'Duration' ,'Type','Moment', ]