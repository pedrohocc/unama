from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=5, decimal_places=2)
    descricao = models.TextField()
    ativo = models.BooleanField(default=True)
    categoria = models.ForeignKey('Categoria', on_delete=models.CASCADE, null=False, blank=False, default=1,)
    imagem = models.ImageField(upload_to='fotos/%Y/%m/%d/', blank=True)
    fornecedor = models.ForeignKey('Fornecedor', on_delete=models.CASCADE, null=False, blank=False, default=1,)

    def __str__(self):
        return self.nome
    
class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    
class Fornecedor(models.Model):
    nome = models.CharField(max_length=100)
    cnpj = models.CharField(max_length=14)
    endereco = models.TextField()
    class Meta:
        verbose_name = 'Fornecedor'
        verbose_name_plural = 'Fornecedores'
    
    def __str__(self):
        return self.nome    
    
class Estoque(models.Model):
    quantidade = models.PositiveIntegerField()
    data = models.DateField()
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE, null=False, blank=False)
    deposito = models.ForeignKey('Deposito', on_delete=models.CASCADE, null=False, blank=False, default=1,)
    setor = models.ForeignKey('Setor', on_delete=models.CASCADE, null=False, blank=False, default=1,)
    
    def __str__(self):
        return self.produto.nome
    
class Deposito(models.Model):
    nome = models.CharField(max_length=100)
    endereco = models.TextField()
    
    def __str__(self):
        return self.nome
    
class Setor(models.Model):
    nome = models.CharField(max_length=100)
    class Meta:
        verbose_name = 'Setor'
        verbose_name_plural = 'Setores'
    
    def __str__(self):
        return self.nome