export interface Message {
    id: number;
    senderId: number;
    senderKnownAs: string;
    senderPhotoUri: string;
    recipientId: number;
    recipientKnownAs: string;
    recipientPhotoUri: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}
