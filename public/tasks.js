const formDOM = document.querySelector('.task-form')

function getNewID() {
    
}


formDOM.addEventListener('submit', async (e) => {

    e.preventDefault()
    const description = document.querySelector('form input#description').value;

    try {
        await axios.post('/', { description });
    } catch (error) {
        
        console.log(error);
    }

})