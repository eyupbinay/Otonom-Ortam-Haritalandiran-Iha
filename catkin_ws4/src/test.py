#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Apr 19 12:02:59 2022

@author: eyup
"""

from dronekit import connect, VehicleMode 
import rospy, time
from sensor_msgs.msg import LaserScan
from pymavlink import mavutil
import math



def scan_callback(msg):
    
    global range_front
    global range_right
    global range_left
    global ranges
    global min_front,i_front, min_right,i_right, min_left ,i_left
    
    print(len(msg.ranges))
    ranges = msg.ranges
#    range_front[:5] = msg.ranges[1019:]
#    range_front[5:] = msg.ranges[:5]
#    range_right = msg.ranges[773:763:-1]
    
#    range_right[:5] = msg.ranges[1019:]
#    range_right[5:] = msg.ranges[:5]
    range_right = msg.ranges[100:80:-1]
    range_front = msg.ranges[190:170:-1]
   # range_left = msg.ranges[773:763]
    min_range,i_range = min( (ranges[i_range],i_range) for i_range in range(len(ranges)) )
    min_front,i_front = min( (range_front[i_front],i_front) for i_front in range(len(range_front)) )
    min_right,i_right = min( (range_right[i_right],i_right) for i_right in range(len(range_right)) )
#    min_left ,i_left  = min( (range_left [i_left ],i_left ) for i_left  in range(len(range_left )) )
##    

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

#
def velocity(velocity_x, velocity_y, velocity_z, yaw_rate, iha):
   
    msg = iha.message_factory.set_position_target_local_ned_encode(
        0,       # time_boot_ms (not used)
        0, 0,    # target system, target component
        mavutil.mavlink.MAV_FRAME_BODY_OFFSET_NED, # frame
        0b0000011111000111, # type_mask (only speeds enabled)
        0, 0, 0, # x, y, z positions (not used)
        velocity_x, velocity_y, velocity_z, # x, y, z velocity in m/s
        0, 0, 0, # x, y, z acceleration (not supported yet, ignored in GCS_Mavlink)
        0, math.radians(yaw_rate))    # yaw, yaw_rate (not supported yet, ignored in GCS_Mavlink)


#    send command to vehicle on 1 Hz cycle
    iha.send_mavlink(msg)
                           

#baglanti
iha=connect("127.0.0.1:14550", wait_ready=True)

# Initialize all variables
range_front = []
range_right = []
range_left  = []
min_front = 0
i_front = 0
min_right = 0
i_right = 0
min_left = 0
i_left = 0


#ihanin havalanmasi
takeoff(0.5)

scan_sub = rospy.Subscriber("/spur/laser/scan", LaserScan, scan_callback, queue_size=1)   # to read the laser scanner
rospy.init_node('lidar_publisher')
      
rate = rospy.Rate(4)
time.sleep(1) # wait for node to initialize

 
while not rospy.is_shutdown():
     print("min front: ", min_front)
     print("min right: ", min_right)
#     print("min left: ", min_left)
##  
     if(min_front > 1.5):
         if(min_right <0.8):             
             print("min right: ", min_right)
             print("Range: {:.2f}m - Too close. Backing up.".format(min_right))
             velocity(0,-0.1,0,3,iha)
            
         elif(min_right>2):
         
             print("min right: ", min_right)
             print("Range: {:.2f}m - Wall-following; turn right.".format(min_right))
             velocity(0,0.1,0,5,iha)
#           
         else:   
         
            print("Range: {:.2f}m - Wall-following; turn right.".format(min_right))
            velocity(0.2,0,0,0,iha)
           

##            
     else:   #5
         print("Front obstacle detected. Turning away.")
         velocity(0,0,0,-8,iha)
         time.sleep(2)

#   rate.sleep()



