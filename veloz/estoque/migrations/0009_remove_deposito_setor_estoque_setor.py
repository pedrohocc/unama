# Generated by Django 5.0.2 on 2024-02-21 17:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('estoque', '0008_deposito_setor_estoque_deposito'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deposito',
            name='setor',
        ),
        migrations.AddField(
            model_name='estoque',
            name='setor',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='estoque.setor'),
        ),
    ]
