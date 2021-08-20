const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', e => {
      e.preventDefault();
      const inputValue = e.target.searchByID.value;
      console.log(inputValue)

      fetch(`http://localhost:3000/movies/${inputValue}`)
        .then(resp => resp.json())
        .then(json => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = json.title;
            summary.innerText = json.summary;
        });
  })
}

document.addEventListener('DOMContentLoaded', init);