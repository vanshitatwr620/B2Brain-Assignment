from multiprocessing import context
from tkinter import Variable
from django.shortcuts import render, HttpResponse

def index(request):
    # return HttpResponse("this is a homepage")
    return render(request, "index.html")

# def about(request):
#     return HttpResponse("this is an about")

# def service(request):
#     return HttpResponse("this is a service")

# def contact(request):
#     return HttpResponse("this is an contact")
