# Generated by Django 5.1.7 on 2025-03-26 23:57

from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_user_version_alter_post_updated_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='version',
        ),
        migrations.AlterField(
            model_name='post',
            name='updated_at',
            field=models.DateTimeField(default='No updates on post'),
        ),
    ]
