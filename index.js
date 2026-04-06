require('dotenv').config()
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const WHATSAPP_TOKEN_NEW = "EAANNALR7DscBRKlCUQVBUhuktRozRO0K9stddyqoCu5eXE3AZBDX7cZA0K7q2FJnLcc4whZCoZB8lO7ZBjcXQB5sVtqkPt7yjs2QPLsWzGE1CkFQJY0glTfUl25BVsAFzVKYc97si2oFqeU3TZC8H7yPAARSgskjES4GPJnycSuvFgDNHWZBe98OzTG5Ey2cXKKtLbNBZCImZCPbQ1RVVvZBpCzxUcYfUf17ENKCAw0S7Ce2TxZApivVlzhvhTs6LFEfBKJPxZAW04SRXPOJjHefKONNAf2lVsb2K04eOXUZD"
async function sendTemplateMessage() {
    const response = await axios({
        url: 'https://graph.facebook.com/v20.0/1053282284535537/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${WHATSAPP_TOKEN_NEW}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '919751847178',
            type: 'template',
            template: {
                name: 'lead_followup_demo',
                language: {
                    code: 'en_US'
                }
            }
        })
    })

    console.log(response.data)
}

async function sendTextMessage() {
    console.log('====' + WHATSAPP_TOKEN_NEW + '====');
    const response = await axios({
        url: 'https://graph.facebook.com/v22.0/1053282284535537/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${WHATSAPP_TOKEN_NEW}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '919751847178',
            type: 'text',
            text: {
                body: 'Hi vellies this is a text message from Vellies Technologies 2.'
            }
        })
    })

    console.log(response.data)
}
async function sendMediaMessage() {
    const response = await axios({
        url: 'https://graph.facebook.com/v20.0/1053282284535537/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${WHATSAPP_TOKEN_NEW}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '919751847178',
            type: 'image',
            image: {
                //link: 'https://dummyimage.com/600x400/000/fff.png&text=manfra.io',
                id: '512126264622813',
                caption: 'This is a media message'
            }
        })
    })

    console.log(response.data)
}

async function uploadImage() {
    const data = new FormData()
    data.append('messaging_product', 'whatsapp')
    data.append('file', fs.createReadStream(process.cwd() + '/logo.png'), { contentType: 'image/png' })
    data.append('type', 'image/png')

    const response = await axios({
        url: 'https://graph.facebook.com/v20.0/1053282284535537/media',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${WHATSAPP_TOKEN_NEW}`
        },
        data: data
    })

    console.log(response.data)
}

sendTemplateMessage()

// sendTextMessage()

// sendMediaMessage()

// uploadImage()