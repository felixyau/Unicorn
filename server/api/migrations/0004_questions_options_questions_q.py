# Generated by Django 4.0.3 on 2022-04-14 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_questions_abc'),
    ]

    operations = [
        migrations.AddField(
            model_name='questions',
            name='options',
            field=models.JSONField(default={}),
        ),
        migrations.AddField(
            model_name='questions',
            name='q',
            field=models.CharField(default='fuck', max_length=200),
        ),
    ]
