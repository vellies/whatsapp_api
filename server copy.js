require('dotenv').config()
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const WHATSAPP_TOKEN_NEW = "EAANNALR7DscBRGTN2rxCfxpUi9yO9NWEylBrRvqLjwRRAuFt5xUlj7dys09gzgfNYMCUxW3E6Ne09a8teDIhZAzvA3Ku4depunmHAHf3fSo2Q3rrmzIr2V47vOmdk0NG1ZCcY3fUqJFHUeWvVF09BsCnUflEz3fZAJKuXHyq28j6A007DZA1d77cr5qHdrvKSWI98UZCMvjeMDj0sch6KPCuWCxdcLH9Hyl2ZAjCwdFDns8gyfglqGqgFREKSkr5QyHCmKtw0AHvUGtehey5CHQjc0sZCqVAEqdugZDZD"
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
                name: 'hello_world',
                language: {
                    code: 'en_US'
                }
            }
        })
    })

    console.log(response.data)
}

async function sendTextMessage() {
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

// sendTemplateMessage()

sendTextMessage()

// sendMediaMessage()

// uploadImage()