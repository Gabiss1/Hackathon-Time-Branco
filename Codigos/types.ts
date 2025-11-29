// types.ts
export interface SendMessagePayload {
    phone: string;
    message: string;
}

export interface MessageResponse {
    phone: string;
    zaapId: string;
    messageID: string;
    type: string;
}   

export interface LinkResponse {
    phone: string; 
    message: string; 
}   

export interface SendLinkPayload {
    phone: string;
    message: string;
}

export interface ImageResponse {
    phone: string;
    zaapId: string;
    messageID: string;
    type: string;
} 

export interface SendImage {
    phone: string;
    image: string;   // URL da imagem
    caption?: string;
}
