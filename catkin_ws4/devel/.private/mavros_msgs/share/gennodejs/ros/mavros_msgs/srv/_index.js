
"use strict";

let SetMode = require('./SetMode.js')
let MessageInterval = require('./MessageInterval.js')
let WaypointPush = require('./WaypointPush.js')
let FileMakeDir = require('./FileMakeDir.js')
let CommandTOL = require('./CommandTOL.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let FileWrite = require('./FileWrite.js')
let SetMavFrame = require('./SetMavFrame.js')
let FileChecksum = require('./FileChecksum.js')
let FileRead = require('./FileRead.js')
let ParamPush = require('./ParamPush.js')
let ParamPull = require('./ParamPull.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let CommandAck = require('./CommandAck.js')
let WaypointPull = require('./WaypointPull.js')
let FileRename = require('./FileRename.js')
let WaypointClear = require('./WaypointClear.js')
let StreamRate = require('./StreamRate.js')
let CommandHome = require('./CommandHome.js')
let ParamGet = require('./ParamGet.js')
let ParamSet = require('./ParamSet.js')
let FileTruncate = require('./FileTruncate.js')
let MountConfigure = require('./MountConfigure.js')
let FileOpen = require('./FileOpen.js')
let FileClose = require('./FileClose.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let FileList = require('./FileList.js')
let FileRemove = require('./FileRemove.js')
let CommandBool = require('./CommandBool.js')
let LogRequestList = require('./LogRequestList.js')
let CommandInt = require('./CommandInt.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let LogRequestData = require('./LogRequestData.js')
let CommandLong = require('./CommandLong.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let LogRequestEnd = require('./LogRequestEnd.js')

module.exports = {
  SetMode: SetMode,
  MessageInterval: MessageInterval,
  WaypointPush: WaypointPush,
  FileMakeDir: FileMakeDir,
  CommandTOL: CommandTOL,
  CommandTriggerControl: CommandTriggerControl,
  FileWrite: FileWrite,
  SetMavFrame: SetMavFrame,
  FileChecksum: FileChecksum,
  FileRead: FileRead,
  ParamPush: ParamPush,
  ParamPull: ParamPull,
  CommandTriggerInterval: CommandTriggerInterval,
  CommandAck: CommandAck,
  WaypointPull: WaypointPull,
  FileRename: FileRename,
  WaypointClear: WaypointClear,
  StreamRate: StreamRate,
  CommandHome: CommandHome,
  ParamGet: ParamGet,
  ParamSet: ParamSet,
  FileTruncate: FileTruncate,
  MountConfigure: MountConfigure,
  FileOpen: FileOpen,
  FileClose: FileClose,
  WaypointSetCurrent: WaypointSetCurrent,
  FileList: FileList,
  FileRemove: FileRemove,
  CommandBool: CommandBool,
  LogRequestList: LogRequestList,
  CommandInt: CommandInt,
  VehicleInfoGet: VehicleInfoGet,
  CommandVtolTransition: CommandVtolTransition,
  LogRequestData: LogRequestData,
  CommandLong: CommandLong,
  FileRemoveDir: FileRemoveDir,
  LogRequestEnd: LogRequestEnd,
};
