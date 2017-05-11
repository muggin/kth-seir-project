/* global fetch */
export const SEARCH_LOADING = 'SEARCH_LOADING'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_ERROR = 'SEARCH_ERROR'

export const search = (file, feature) => {
  return dispatch => {
    dispatch({type: SEARCH_LOADING})

    const reader = new FileReader()

    reader.readAsDataURL(file)

    const fileName = file.name
    const fileEnding = fileName.substring(fileName.length - 3, fileName.length)
    
    reader.addEventListener("load", function () {
      return fetch('http://localhost:8081/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({image: reader.result, file_ending: fileEnding, feature})
      })
      .then(response => response.json())
      .then(images => {
        dispatch({type: SEARCH_SUCCESS, images: ['llama.jpg', 'llama.jpg', 'llama.jpg', 'llama.jpg', 'llama.jpg', 'llama.jpg', 'llama.jpg', 'llama2.jpg', 'llama.jpg', 'llama2.jpg', 'llama.jpg', 'llama2.jpg', 'llama.jpg', 'llama2.jpg', 'llama.jpg', 'llama2.jpg', 'llama.jpg', 'llama2.jpg', 'llama.jpg', 'llama2.jpg', 'llama.jpg', 'llama2.jpg', 'llama.jpg', 'llama2.jpg', 'llama2.jpg', 'llama2.jpg', 'llama2.jpg', 'llama2.jpg', 'llama2.jpg', 'llama2.jpg', 'llama2.jpg']})
        //dispatch({type: SEARCH_SUCCESS, images})
        console.log('IMAGES', images)
      })
      .catch(error => dispatch({type: SEARCH_ERROR, error}))
    }, false);


  }
}

export const SELECT_FEATURE = 'SELECT_FEATURE'

export const selectFeature = feature => ({type: SELECT_FEATURE, feature})

export const SELECT_SCORING = 'SELECT_SCORING'

export const selectScoring = scoring => ({type: SELECT_SCORING, scoring})
