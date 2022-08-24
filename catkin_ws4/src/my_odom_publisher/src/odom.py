#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed May 11 20:27:43 2022

@author: eyup
"""

import rospy
from std_msgs.msg import Header
from nav_msgs.msg import Odometry
from gazebo_msgs.srv import GetModelState, GetModelStateRequest

rospy.init_node("odom_pub")

odom_pub=rospy.Publisher('/my_odom',Odometry)

rospy.wait_for_service('/gazebo/get_model_state')
get_model_srv=rospy.ServiceProxy('/gazebo/get_model_state', GetModelState)

odom=Odometry()
header=Header()
header.frame_id='/odom'

model=GetModelStateRequest()
model.model_name='iris_demo'
r=rospy.Rate(2)

while not rospy.is_shutdown():
    result=get_model_srv(model)
    odom.pose.pose=result.pose
    odom.twist.twist=result.twist
    header.stamp=rospy.Time.now()
    odom.header=header
    odom_pub.publish (odom)
    r.sleep()
    
    