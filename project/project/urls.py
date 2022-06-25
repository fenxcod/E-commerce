from django.urls import path
from myapp.views import index
from myapp.views import items
from myapp.views import checkout
from myapp.views import description_aguacate
from myapp.views import cerdito
from myapp.views import changuito
from myapp.views import chihuahua
from myapp.views import conejita
from myapp.views import triceratops
from myapp.views import rex
from myapp.views import deno
from myapp.views import pardo
from myapp.views import carrito_compra
from myapp.views import compraExito


urlpatterns = [
    path("",view=index,name="index"),
    path("items",view=items,name="items"),
    path("checkout",view=checkout,name="checkout"),
    path("description",view=description_aguacate,name="description"),
    path('cerdito',view=cerdito,name="cerdito"),
    path("changuito",view=changuito,name="changuito"),
    path("chihuahua",view=chihuahua,name="chihuahua"),
    path("conejita",view=conejita,name="conejita"),
    path("triceratops",view=triceratops,name="triceratops"),
    path("rex",view=rex,name="rex"),
    path("deno",view=deno,name="deno"),
    path("pardo",view=pardo,name="pardo"),
    path("cart_page",view=carrito_compra,name="cart_page"),
    path("compra",view=compraExito,name="compra"),

]
