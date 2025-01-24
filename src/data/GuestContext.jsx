//const url = "http://localhost:3000/guests/"
const url = "https://luizoliveir4.github.io/movieseatbookingapi/guests.json?id=123"

export async function loadGuests() {
    const response = await fetch(url);
    const guests = await response.json();

    return guests
}

export async function sendGuestToServer(guest) {
    console.log(JSON.stringify(guest))
    const response = await fetch(url ,{
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method:"POST",
       body:JSON.stringify(guest)
    });
    console.log(response)
  }