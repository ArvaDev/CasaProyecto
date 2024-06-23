import { Request, Response } from 'express';
import amqp from 'amqplib/callback_api'
import { pubConnect } from '../../services/pubRabbit';
import { EventRepoCont } from './event.repository.cont';
import { CreateEvent } from '../application/createEvent';
import { DeleteHistory } from '../application/deleteHistory';
import { GetHistory } from '../application/getHistory';

const EHC = new EventRepoCont();
const createEvent = new CreateEvent(EHC);
const deleteHistory = new DeleteHistory(EHC);
const getHistory = new GetHistory(EHC);

//post
export const createEventCont = async (req: Request, res: Response) => {
    try {
        await pubConnect(JSON.stringify(req.body));
        await createEvent.exe(req.body);
        res.status(200).json({ success: true, message: 'Mensaje enviado correctamente.' });
    } catch (error) {
        console.error('Error al publicar mensaje:', error);
        res.status(500).json({ success: false, error: 'Error al publicar mensaje.' });
    }
};

//get
export const getHistoryCont = async (_req: Request, res: Response) => {
    await getHistory.exe()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({err: err}));
}

//delete
export const deleteHistoryCont = async (_req: Request, res: Response) => {
    await deleteHistory.exe()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({err: err}));
}

//get
export const getEventCont = async (_req: Request, res: Response) => {
    const amqpUrl = 'amqp://Armando:armandorv@localhost';
    amqp.connect(amqpUrl, (err, connection) => {
        if (err) { throw err; }
        connection.createChannel((err, channel) => {
            if (err) { throw err; }
            const queueName = "Admin_queue";
            channel.assertQueue(queueName, { durable: true });
            channel.consume(queueName, (msg) => {
                if (msg !== null) {
                    res.json(JSON.parse(msg.content.toString()));
                    channel.ack(msg);
                }
            });
        });
    });
};