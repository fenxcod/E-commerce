from django.http import HttpResponse
from django.template import loader

def index(request):
    template = loader.get_template('index.html')
    document = template.render()
    return HttpResponse(document)

def items(request):
    template = loader.get_template('items.html')
    document = template.render()
    return HttpResponse(document)

# views.py
 
def checkout(request):
    template = loader.get_template('checkout.html')
    document = template.render()
    return HttpResponse(document)

def description_aguacate(request):
    template = loader.get_template('description.html')
    document = template.render()
    return HttpResponse(document)

def cerdito(request):
    template = loader.get_template('cerdito.html')
    document = template.render()
    return HttpResponse(document)

def changuito(request):
    template = loader.get_template('changuito.html')
    document = template.render()
    return HttpResponse(document)

def chihuahua(request):
    template = loader.get_template('chihuahua.html')
    document = template.render()
    return HttpResponse(document)

def conejita(request):
    template = loader.get_template('conejita.html')
    document = template.render()
    return HttpResponse(document)

def triceratops(request):
    template = loader.get_template('triceratops.html')
    document = template.render()
    return HttpResponse(document)

def rex(request):
    template = loader.get_template('rex.html')
    document = template.render()
    return HttpResponse(document)

def deno(request):
    template = loader.get_template('deno.html')
    document = template.render()
    return HttpResponse(document)

def pardo(request):
    template = loader.get_template('pardo.html')
    document = template.render()
    return HttpResponse(document)

def carrito_compra(request):
    template = loader.get_template('cart_page.html')
    document = template.render()
    return HttpResponse(document)

def compraExito(request):
    template = loader.get_template('compraExito.html')
    document = template.render()
    return HttpResponse(document)

def form(request):
    template = loader.get_template('form.html')
    document = template.render()
    return HttpResponse(document)

def bolsa(request):
    template = loader.get_template('bolsa.html')
    document = template.render()
    return HttpResponse(document)