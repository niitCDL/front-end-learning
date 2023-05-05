<template>
    <div>
        <p v-for="(message, idx) in messages" :key="idx">{{ message }}</p>
    </div>
</template>
  
<script>
let sseClient;

export default {
    name: 'sse-test',
    data() {
        return {
            messages: [],
        };
    },
    mounted() {
        sseClient = this.$sse.create({
            url: 'http://localhost:8080/sse/msg',
            format: 'text',
            withCredentials: true,
            polyfill: true,
        });

        // Catch any errors (ie. lost connections, etc.)
        sseClient.on('error', (e) => {
            console.error('lost connection or failed to parse!', e);

        });

        // Handle messages without a specific event
        sseClient.on('message', this.handleMessage);

        // Handle 'chat' messages
        sseClient.on('chat', this.handleChat);

        // Handle once for a ban message
        sseClient.once('ban', this.handleBan);

        /* 
            .then(sse => {
                console.log('We\'re connected!');

                setTimeout(() => {
                    sseClient.off('message', this.handleMessage);
                    console.log('Stopped listening to event-less messages!');
                }, 7000);

                setTimeout(() => {
                    sse.off('chat', this.handleChat);
                    console.log('Stopped listening to chat messages!');
                }, 14000);
            })
        */
        sseClient.connect()
            .catch((err) => {
                console.error('Failed to connect to server', err);
            });
    },
    methods: {
        handleBan(banMessage) {

            this.messages.push(`You've been banned! Reason: ${banMessage.reason}`);
        },
        handleChat(message) {
            this.messages.push(`${message.user} said: ${message.text}`);
        },
        handleMessage(message, lastEventId) {
            this.messages.push(message);
            console.warn('Received a message w/o an event!', message, lastEventId);
        },
    },
    beforeDestroy() {
        sseClient.disconnect();
    },
};
</script>