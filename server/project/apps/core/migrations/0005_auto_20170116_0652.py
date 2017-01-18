# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2017-01-16 06:52
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20170116_0650'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='playlistsoundmooseitem',
            options={'verbose_name': 'Playlist soundmoose item', 'verbose_name_plural': 'Playlists soundmoose items'},
        ),
        migrations.RemoveField(
            model_name='playlistsoundmooseitem',
            name='artist',
        ),
        migrations.RemoveField(
            model_name='playlistsoundmooseitem',
            name='duration',
        ),
        migrations.RemoveField(
            model_name='playlistsoundmooseitem',
            name='img_url',
        ),
        migrations.RemoveField(
            model_name='playlistsoundmooseitem',
            name='platform',
        ),
        migrations.RemoveField(
            model_name='playlistsoundmooseitem',
            name='stream_url',
        ),
        migrations.RemoveField(
            model_name='playlistsoundmooseitem',
            name='track_id',
        ),
    ]
