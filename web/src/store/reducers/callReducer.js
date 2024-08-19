import * as callActions from "../actions/callActions";

const initialState = {
  localStream: null,
  callState: callActions.callStates.CALL_AVAILABLE,
  callingDialogVisible: false,
  callerUsername: "",
  callRejected: {
    rejected: false,
    reason: "",
  },
  remoteStream: null,
  localCameraEnabled: true,
  localMicrophoneEnabled: true,
  screenSharingActive: false,
  groupCallActive: false,
  groupCallHostname: "",
  groupCallMembers: [],
  groupCallStreams: [],
  message: {
    received: false,
    content: "",
  },
  notificationMsg: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case callActions.CALL_SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.localStream,
      };

    case callActions.CALL_SET_CALL_STATE:
      return {
        ...state,
        callState: action.callState,
      };

    case callActions.CALL_SET_CALLING_DIALOG_VISIBLE:
      return {
        ...state,
        callingDialogVisible: action.visible,
      };

    case callActions.CALL_SET_CALLER_USERNAME:
      return {
        ...state,
        callerUsername: action.callerUsername,
      };

    case callActions.CALL_SET_CALL_REJECTED:
      return {
        ...state,
        callRejected: {
          rejected: action.callRejected.rejected,
          reason: action.callRejected.reason,
        },
      };

    case callActions.CALL_SET_REMOTE_STREAM:
      return {
        ...state,
        remoteStream: action.remoteStream,
      };

    case callActions.CALL_SET_LOCAL_CAMERA_ENABLED:
      return {
        ...state,
        localCameraEnabled: action.enabled,
      };

    case callActions.CALL_SET_LOCAL_MICROPHONE_ENABLED:
      return {
        ...state,
        localMicrophoneEnabled: action.enabled,
      };

    case callActions.CALL_SET_SCREEN_SHARING_ACTIVE:
      return {
        ...state,
        screenSharingActive: action.active,
      };

    case callActions.CALL_RESET_CALL_DATA_STATE:
      return {
        ...state,
        remoteStream: null,
        screenSharingActive: false,
        callerUsername: "",
        localMicrophoneEnabled: true,
        localCameraEnabled: true,
        callingDialogVisible: false,
      };

    case callActions.CALL_SET_GROUP_CALL_ACTIVE:
      return {
        ...state,
        groupCallActive: action.active,
      };

    case callActions.CALL_SET_GROUP_CALL_HOST_NAME:
      return {
        ...state,
        groupCallHostname: action.hostName,
      };

    case callActions.CALL_SET_GROUP_CALL_MEMBERS:
      return {
        ...state,
        groupCallMembers: action.members,
      };

    case callActions.CALL_SET_GROUP_CALL_STREAMS:
      return {
        ...state,
        groupCallStreams: action.groupCallStreams,
      };

    case callActions.CALL_CLEAR_GROUP_CALL_DATA:
      return {
        ...state,
        groupCallActive: false,
        groupCallStreams: [],
        callState: callActions.callStates.CALL_AVAILABLE,
        localMicrophoneEnabled: true,
        localCameraEnabled: true,
      };

    case callActions.CALL_SET_CHAT_MESSAGE:
      return {
        ...state,
        message: action.message,
      };

    case callActions.CALL_SET_CALL_NOTIFICATION:
      return {
        ...state,
        notificationMsg: action.notificationMsg,
      };

    default:
      return state;
  }
};

export default reducer;
