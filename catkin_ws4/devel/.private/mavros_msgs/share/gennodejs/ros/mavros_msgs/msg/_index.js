
"use strict";

let LogData = require('./LogData.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let ESCStatus = require('./ESCStatus.js');
let ESCInfo = require('./ESCInfo.js');
let Mavlink = require('./Mavlink.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let WaypointList = require('./WaypointList.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let RCIn = require('./RCIn.js');
let RTCM = require('./RTCM.js');
let Vibration = require('./Vibration.js');
let State = require('./State.js');
let Thrust = require('./Thrust.js');
let GPSINPUT = require('./GPSINPUT.js');
let RCOut = require('./RCOut.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let FileEntry = require('./FileEntry.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let Altitude = require('./Altitude.js');
let TerrainReport = require('./TerrainReport.js');
let HomePosition = require('./HomePosition.js');
let StatusText = require('./StatusText.js');
let CommandCode = require('./CommandCode.js');
let Param = require('./Param.js');
let DebugValue = require('./DebugValue.js');
let HilSensor = require('./HilSensor.js');
let RadioStatus = require('./RadioStatus.js');
let GPSRAW = require('./GPSRAW.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let VFR_HUD = require('./VFR_HUD.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let ParamValue = require('./ParamValue.js');
let ManualControl = require('./ManualControl.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let ExtendedState = require('./ExtendedState.js');
let Trajectory = require('./Trajectory.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let Waypoint = require('./Waypoint.js');
let HilGPS = require('./HilGPS.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let GPSRTK = require('./GPSRTK.js');
let LandingTarget = require('./LandingTarget.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let LogEntry = require('./LogEntry.js');
let ActuatorControl = require('./ActuatorControl.js');
let BatteryStatus = require('./BatteryStatus.js');
let MountControl = require('./MountControl.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let WaypointReached = require('./WaypointReached.js');
let PositionTarget = require('./PositionTarget.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let Tunnel = require('./Tunnel.js');
let HilControls = require('./HilControls.js');
let RTKBaseline = require('./RTKBaseline.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let VehicleInfo = require('./VehicleInfo.js');
let NavControllerOutput = require('./NavControllerOutput.js');

module.exports = {
  LogData: LogData,
  ESCInfoItem: ESCInfoItem,
  ESCStatus: ESCStatus,
  ESCInfo: ESCInfo,
  Mavlink: Mavlink,
  GlobalPositionTarget: GlobalPositionTarget,
  WaypointList: WaypointList,
  OnboardComputerStatus: OnboardComputerStatus,
  WheelOdomStamped: WheelOdomStamped,
  RCIn: RCIn,
  RTCM: RTCM,
  Vibration: Vibration,
  State: State,
  Thrust: Thrust,
  GPSINPUT: GPSINPUT,
  RCOut: RCOut,
  ESCTelemetryItem: ESCTelemetryItem,
  FileEntry: FileEntry,
  TimesyncStatus: TimesyncStatus,
  EstimatorStatus: EstimatorStatus,
  CameraImageCaptured: CameraImageCaptured,
  Altitude: Altitude,
  TerrainReport: TerrainReport,
  HomePosition: HomePosition,
  StatusText: StatusText,
  CommandCode: CommandCode,
  Param: Param,
  DebugValue: DebugValue,
  HilSensor: HilSensor,
  RadioStatus: RadioStatus,
  GPSRAW: GPSRAW,
  OpticalFlowRad: OpticalFlowRad,
  VFR_HUD: VFR_HUD,
  ESCTelemetry: ESCTelemetry,
  ParamValue: ParamValue,
  ManualControl: ManualControl,
  AttitudeTarget: AttitudeTarget,
  ExtendedState: ExtendedState,
  Trajectory: Trajectory,
  HilStateQuaternion: HilStateQuaternion,
  Waypoint: Waypoint,
  HilGPS: HilGPS,
  CamIMUStamp: CamIMUStamp,
  GPSRTK: GPSRTK,
  LandingTarget: LandingTarget,
  HilActuatorControls: HilActuatorControls,
  LogEntry: LogEntry,
  ActuatorControl: ActuatorControl,
  BatteryStatus: BatteryStatus,
  MountControl: MountControl,
  PlayTuneV2: PlayTuneV2,
  CompanionProcessStatus: CompanionProcessStatus,
  WaypointReached: WaypointReached,
  PositionTarget: PositionTarget,
  MagnetometerReporter: MagnetometerReporter,
  Tunnel: Tunnel,
  HilControls: HilControls,
  RTKBaseline: RTKBaseline,
  ADSBVehicle: ADSBVehicle,
  OverrideRCIn: OverrideRCIn,
  ESCStatusItem: ESCStatusItem,
  VehicleInfo: VehicleInfo,
  NavControllerOutput: NavControllerOutput,
};
