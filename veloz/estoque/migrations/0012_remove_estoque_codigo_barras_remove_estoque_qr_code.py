# Generated by Django 5.0.2 on 2024-02-21 20:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('estoque', '0011_produto_imagem'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='estoque',
            name='codigo_barras',
        ),
        migrations.RemoveField(
            model_name='estoque',
            name='qr_code',
        ),
    ]
