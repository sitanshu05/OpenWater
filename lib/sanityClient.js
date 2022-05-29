import sanityCilent from '@sanity/client'

export const client = sanityCilent({
    projectId: "lufsykan",
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
     'skMbNUiRBNjoUzbVuYohwGidpCQatX6N5VGCwkghFZrKskIjlsLAbFDcmbk6ujQjSfRJVydr6Ob3fZoihJajVgTQkh1gz42Go8LxJuphfL2atXzJDlwkP7ba0mUyReLobqnFB1MVzJxk4nIIGhisB2S98al0DTQGls1PE44xrFDwi4VQGrzK',
    useCdn: false,
    
})