const button = document.getElementById('generate')
const user = document.getElementById('user')

function generateUser() {
  showSpinner()
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
      const fetchedUser = data.results[0]
      user.innerHTML = `
        <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${fetchedUser.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${fetchedUser.name.first} ${fetchedUser.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${fetchedUser.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${fetchedUser.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${fetchedUser.location.city} ${fetchedUser.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${fetchedUser.dob.age}</p>
            </div>
          </div>
        </div>
        `
      if (fetchedUser.gender === 'female') {
        document.body.style.backgroundColor = 'rebeccapurple'
      } else {
        document.body.style.backgroundColor = 'steelblue'
      }
      hideSpinner()
    })
}

function showSpinner() {
  document.querySelector('.spinner').style.display = 'block'
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none'
}

generateUser()

button.addEventListener('click', generateUser)
