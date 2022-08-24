#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jul 21 15:02:28 2022

@author: eyup
"""
from dronekit import connect, VehicleMode
import time


iha=connect("127.0.0.1:14550", wait_ready=True)

def takeoff(irtifa):
    while iha.is_armable is not True:
        print("İHA arm edilebilir durumda değil.")
        time.sleep(1)
    print("İHA arm edilebilir.")   
    iha.mode=VehicleMode("GUIDED")
    iha.armed=True
    while iha.armed is not True:
        print("İHA arm ediliyor...")
        time.sleep(0.5)
    print("İHA arm edildi.")
    iha.simple_takeoff(irtifa)
    #time.sleep(5)
    while iha.location.global_relative_frame.alt < irtifa*0.9:
        print("İHA hedefe yükseliyor.")
        time.sleep(1)
        
takeoff(1)