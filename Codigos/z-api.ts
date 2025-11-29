// sendMessage.ts
import axios from 'axios';
import { SendMessagePayload, MessageResponse, SendLinkPayload, LinkResponse, SendImage, ImageResponse } from './types';
import * as dotenv from 'dotenv';

dotenv.config();

// Suas credenciais da Z-API (substitua pelos seus valores reais)
const instanceId = process.env.INSTANCE_ID;
const instanceToken = process.env.INSTANCE_TOKEN;
const apiUrl = ` https://api.z-api.io/instances/${instanceId}/token/${instanceToken}/send-text`;
const apiUrlLink = `https://api.z-api.io/instances/${instanceId}/${instanceToken}/send-text`;

async function sendMessage(payload: SendMessagePayload): Promise<MessageResponse | undefined> {
    try {
        const response = await axios.post<MessageResponse>(apiUrl, payload, {
            headers: {
                'Client-Token': process.env.CLIENT_TOKEN,
                'Content-Type': 'application/json',
            },
        });

        console.log('Mensagem enviada com sucesso!');
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Erro ao enviar mensagem:', error.message);
            console.error('Detalhes do erro:', error.response?.data);
        } else {
            console.error('Ocorreu um erro inesperado:', error);
        }
        return undefined;
    }
}

async function sendLink(payload: SendLinkPayload): Promise<LinkResponse | undefined> {
    try {
        const response = await axios.post<LinkResponse>(apiUrlLink, payload, {
            headers: {
                'Client-Token': process.env.CLIENT_TOKEN,
                'Content-Type': 'application/json',
            },
        });

        console.log('Mensagem enviada com sucesso!');
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Erro ao enviar mensagem:', error.message);
            console.error('Detalhes do erro:', error.response?.data);
        } else {
            console.error('Ocorreu um erro inesperado:', error);
        }
        return undefined;
    }
}

async function sendImageFile(payload: SendImage): Promise<ImageResponse | undefined> {
    try {
        const response = await axios.post<ImageResponse>(
            `https://api.z-api.io/instances/${instanceId}/token/${instanceToken}/send-image`,
            payload,
            {
                headers: {
                    'Client-Token': process.env.CLIENT_TOKEN,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Imagem enviada com sucesso!");
        console.log(response.data);
        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Erro ao enviar imagem:", error.message);
            console.error("Detalhes:", error.response?.data);
        } else {
            console.error("Erro inesperado:", error);
        }
        return undefined;
    }
}

// Exemplo de uso:
const messageData: SendMessagePayload = {
    phone: '5551984077925', // Número de destino com código do país e estado
    message: "Olá **, tudo certo?\n\nAqui estão as informações sobre a fila:\n\nCor do Protocolo: **;\nPosição na Fila: **;\nTempo de espera total estimado: **.",
};

const linkData: SendLinkPayload = {
    phone: '5551984077925',
    message: 'Entre no nosso site para mais informações!\n\nhttps://github.com/LuccaFagundes'
};  

const imagePayload = {
    phone: "5551984077925",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96w8tGOgp0vGTrWkRf9-OwxQmvwuq3OrGsg&s",
    caption: "Aqui está sua imagem!"
};

sendImageFile(imagePayload);
sendMessage(messageData);
sendLink(linkData);