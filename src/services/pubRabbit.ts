import amqp from 'amqplib';

export const pubConnect = async (message: string) => {
    try {
        const connection = await amqp.connect('amqp://Armando:armandorv@localhost');
        const channel = await connection.createChannel();

        const queueName = 'Admin_queue';
        await channel.assertQueue(queueName, { durable: true });
        channel.sendToQueue(queueName, Buffer.from(message), { persistent: true });

        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Error al publicar mensaje en RabbitMQ:', error);
    }
};
