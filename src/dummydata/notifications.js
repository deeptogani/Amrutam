//Mock Data for User
import User from "./user"

const doctorName = "Dr. Tam"
const blogName = "Amrutam Blog"

export const notifications = [

    {
        id : 1,
        icon : "user",
        text : "Namaste! \nWelcome to the Amrutam Family :) \nWe hope you have a holistic experience here.",
        date : "15 Feb 2022"
    },

    {
        id : 2,
        icon : "success",
        text : `${User.name}, Woohoo! Your order has been placed and will be shipped shortly! Track your order here`,
        date : "15 Feb 2022"
    },

    {
        id : 3,
        icon : "waiting",
        text : `${User.name}, your favourite Amrutam Elixirs are waiting for you!`,
        date : "15 Feb 2022"
    },

    {
        id : 4,
        icon : "ding",
        text : `Ding Ding! That's the bell for the new blog - ${blogName}`,
        date : "15 Feb 2022"
    },

    {
        id : 5,
        icon : "green_basket",
        text : `${User.name} Good News! Your order has arrived!`,
        date : "15 Feb 2022"
    },

    {
        id : 6,
        icon : "cancelled",
        text : "The transaction for your recent order has failed; \nclick here to try again.",
        date : "15 Feb 2022"
    },

    {
        id : 7,
        icon : "chatReminder",
        text : `Reminder: Your chat consultation session with ${doctorName} starts in 60 minutes`,
        date : "15 Feb 2022"
    },

    {
        id : 8,
        icon : "videoReminder",
        text : `Reminder: Your Video consultation session with ${doctorName} starts in 60 minutes.`,
        date : "15 Feb 2022"
    },

    {
        id : 9,
        icon : "cancelled",
        text : `${User.name} we regret to inform you that your Chat consultation with ${doctorName} has been cancelled`,
        date : "15 Feb 2022"
    },

    {
        id : 10,
        icon : "cancelled",
        text : `${User.name} we regret to inform you that your Video consultation with ${doctorName} has been cancelled`,
        date : "15 Feb 2022"
    }, 

    {
        id : 11,
        icon : "chatWaiting",
        text : `${User.name}, ${doctorName} has joined the chat room and is waiting for you.`,
        date : "15 Feb 2022"
    }, 

    {
        id : 12,
        icon : "videoWaiting",
        text : `${User.name}, ${doctorName} has joined the video room and is waiting for you.`,
        date : "15 Feb 2022"
    }, 

    {
        id : 13,
        icon : "prescription",
        text : `${User.name} Click here for your prescription and start your Ayurvedic journey! \nhttps://docs.google.com/document/u/0/`,
        date : "15 Feb 2022"
    }, 

]