import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    },
    inputField: {
        marginBottom: 10,
        flexDirection: 'column',
    },
    videoContainer: {
        flex: 1,
        minHeight: 450,
    },
    videos: {
        width: '100%',
        flex: 1,
        position: 'relative',
        overflow: 'hidden',

        borderRadius: 6,
    },
    localVideos: {
        height: 100,
        marginBottom: 10,
    },
    remoteVideos: {
        height: 400,
    },
    localVideo: {
        backgroundColor: '#f2f2f2',
        height: '100%',
        width: '100%',
    },
    remoteVideo: {
        backgroundColor: '#f2f2f2',
        height: '100%',
        width: '100%',
    },
});
