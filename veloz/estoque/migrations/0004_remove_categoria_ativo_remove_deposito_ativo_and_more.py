# Generated by Django 5.0.2 on 2024-02-21 03:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('estoque', '0003_produto_categoria_produto_fornecedor'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='categoria',
            name='ativo',
        ),
        migrations.RemoveField(
            model_name='deposito',
            name='ativo',
        ),
        migrations.RemoveField(
            model_name='estoque',
            name='ativo',
        ),
        migrations.RemoveField(
            model_name='fornecedor',
            name='ativo',
        ),
        migrations.RemoveField(
            model_name='produto',
            name='ativo',
        ),
        migrations.RemoveField(
            model_name='setor',
            name='ativo',
        ),
    ]