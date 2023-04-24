//Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Colors
import color from '../../../color';

const user = (size) => <EvilIcons name="user" size={size} color={color.primary1} />
const success = (size) => <AntDesign name="checkcircleo" size={size} color={color.primary1} />
const waiting = (size) => <EvilIcons name="clock" size={size} color={color.primary1} />
const newBlog = (size) => <MaterialCommunityIcons name="file-document-edit" size={size} color={color.primary1} />
const orderArrived = (size) => <FontAwesome name="shopping-basket" size={size} color={color.primary1} />
const cancelled = (size) => <Fontisto name="close" size={size} color={color.red} />
const reminderChatConsultation = (size) => <MaterialCommunityIcons name="comment-text-outline" size={size} color={color.primary1} />
const reminderVideoConsultation = (size) => <Feather name="play-circle" size={size} color={color.primary1} />
const chatRoomWaiting = (size) => <MaterialCommunityIcons name="comment-text-outline" size={size} color={color.primary1} />
const videoRoomWaiting = (size) => <Feather name="play-circle" size={size} color={color.primary1} />
const givePrescription = (size) => <Feather name="plus-circle" size={size} color={color.primary1} />

export default Icons = (props) => {

    switch(props.icon){

        case 'user': return user(props.size);
        case 'success' : return success(props.size);
        case 'waiting' : return waiting(props.size);
        case 'newBlog' : return newBlog(props.size);
        case 'orderArrived' : return orderArrived(props.size);
        case 'cancelled' : return cancelled(props.size);
        case 'reminderChatConsultation' : return reminderChatConsultation(props.size);
        case 'reminderVideoConsultation' : return reminderVideoConsultation(props.size);
        case 'chatRoomWaiting' : return chatRoomWaiting(props.size);
        case 'videoRoomWaiting' : return videoRoomWaiting(props.size);
        case 'givePrescription' : return givePrescription(props.size);

    }

}