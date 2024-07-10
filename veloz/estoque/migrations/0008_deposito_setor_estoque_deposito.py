# Generated by Django 5.0.2 on 2024-02-21 17:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('estoque', '0007_alter_estoque_produto'),
    ]

    operations = [
        migrations.AddField(
            model_name='deposito',
            name='setor',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='estoque.setor'),
        ),
        migrations.AddField(
            model_name='estoque',
            name='deposito',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='estoque.deposito'),
        ),
    ]