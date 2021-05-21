var app = new Vue({

    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },
                    {
                        date: '20/05/2021 16:15:22',
                        text: 'Test ieri :Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, illo?',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    },
                    {
                        date: '21/05/2021 16:35:00',
                        text: 'Test oggi :Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, illo?',
                        status: 'sent'
                    }
                ],
            },     
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        activeChatIndex: 0
    },
    methods: {
        getNowDateTime: function () {
            return dayjs().format('DD/MM/YYYY HH:mm:ss');
        },
        getMsgTime: function(message) {
            const msgTime = message.date.split(" ")[1];
            return msgTime.substr(0, 5);
        },
        getContactImg: function(contact) {
            return `img/avatar${contact.avatar}.jpg`;
        },
        getLastMsg: function(contact) {
            return contact.messages[contact.messages.length - 1];
        },
        getLastMsgDate: function(contact) {
            const todayDateTime = this.getNowDateTime();
            const todayDate = todayDateTime.split(" ")[0];
            const todayDay = todayDateTime.substr(0, 2);          
            const todayMonthYear = todayDateTime.substr(2, 8);         
            const msgDateTime =  this.getLastMsg(contact).date;
            const msgDate = msgDateTime.split(" ")[0];
            const msgDay = msgDateTime.substr(0, 2);
            const msgMonthYear = msgDateTime.substr(2, 8);
            const msgHoursMins = msgDateTime.substr(10, 6);
            console.log(todayDay, msgDay);
            let lastMsgTime;

            if (msgDate == todayDate) {
                lastMsgTime = `oggi ${msgHoursMins}`
            } else if (msgMonthYear == todayMonthYear && msgDay == todayDay - 1) {
                lastMsgTime = `ieri ${msgHoursMins}`
            } else {
                lastMsgTime = `${msgDate} ${msgHoursMins}`
            }
            return lastMsgTime;
        },        
        getLastMsgText: function(contact) {
            return this.getLastMsg(contact).text;
        },
        text40: function(text) {
            let newText = text;
            if (text.length > 35) {
                newText = `${text.substring(0, 40)}...`;
            }
            return newText;
        },
        setActive: function(chatIndex) {
            console.log(this.activeChatIndex);
            this.activeChatIndex = chatIndex;
        },
        getActiveContact: function() {
            return this.contacts[this.activeChatIndex];
        },
        getActiveImg: function() {
            return `img/avatar${this.contacts[this.activeChatIndex].avatar}.jpg`;
        },
    }
});