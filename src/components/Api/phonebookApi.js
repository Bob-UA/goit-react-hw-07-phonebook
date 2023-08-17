
const BASE_URL = 'https://64dc37fde64a8525a0f64a21.mockapi.io/phonebook';

export const getContacts = async () => {
    const data = await fetch(BASE_URL)
    return await data.json()
};

export const addContact = async (data) => {
    const res = await fetch(BASE_URL, {
        body: JSON.stringify(data),
    })
    return await res.json()
}

export const deleteContact = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`)
    return await res.json()
}