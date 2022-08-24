#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed May 11 20:27:43 2022

@author: eyup
"""

import tf2_ros
import rospy
from std_msgs.msg import Header
from nav_msgs.msg import Odometry
from gazebo_msgs.msg import ModelStates
from tf2_msgs.msg import TFMessage
from geometry_msgs.msg import TransformStamped, Vector3, Quaternion
from gazebo_msgs.srv import GetModelState, GetModelStateRequest

seq = 0


rospy.init_node("odom_pub")

#odom_pub=rospy.Publisher('/my_odom',Odometry, queue_size=1)
odom_pub=rospy.Publisher('/tf', TFMessage, queue_size=1)

rospy.wait_for_service('/gazebo/get_model_state')
get_model_srv=rospy.ServiceProxy('/gazebo/get_model_state', GetModelState)

#odom=Odometry()
#header=Header()
#header.frame_id='odom'
#odom.child_frame_id='hokuyo_sensor_link'



model=GetModelStateRequest()
model.model_name='iris_demo'

broadcaster = tf2_ros.StaticTransformBroadcaster()

r=rospy.Rate(2)

while not rospy.is_shutdown():
    #odom_tf = TFMessage()
    result=get_model_srv(model)
    
    if not result.success:
    	print("No model state!!")
    	continue
    
    #odom.pose.pose=result.pose
    #odom.twist.twist=result.twist
    
    #header.stamp=rospy.Time.now()
    #odom.header=header
    
    #odom_pub.publish(odom)
    
    iris_tf = TransformStamped()
    iris_tf.header.seq = seq
    iris_tf.header.stamp = rospy.Time.now()
    iris_tf.header.frame_id = "odom"
	
    iris_tf.child_frame_id = "iris::base_link"
	
    iris_tf.transform.translation = Vector3(result.pose.position.x, result.pose.position.y, result.pose.position.z)
    iris_tf.transform.rotation = result.pose.orientation
	
    #odom_tf.transforms = [iris_tf]
    
    #odom_pub.publish(odom_tf)
    broadcaster.sendTransform(iris_tf)
    seq += 1
  
    r.sleep()

rospy.spin()
