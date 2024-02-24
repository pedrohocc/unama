from django.contrib import admin
from estoque.models import Produto, Estoque, Categoria, Fornecedor, Deposito, Setor

class DefaultAdmin(admin.ModelAdmin):
    list_per_page = 10

class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'categoria', 'fornecedor', 'preco')
    list_display_links = ('nome', 'categoria', 'fornecedor')
    search_fields = ('nome', 'categoria', 'fornecedor')
    list_per_page = 10


admin.site.register(Produto, ProdutoAdmin)
admin.site.register(Estoque, DefaultAdmin)
admin.site.register(Categoria, DefaultAdmin)
admin.site.register(Fornecedor, DefaultAdmin)
admin.site.register(Deposito, DefaultAdmin)
admin.site.register(Setor, DefaultAdmin)