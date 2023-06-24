interface Word {
  term: string
  audioUrls: string[]
  meanings: string[]
}

interface WordNotFound {
  title: string
}

const isInstanceOfWordNotFound = (obj: Word[] | WordNotFound) =>
  (obj as WordNotFound).title != undefined

const getWords = (jsonObj: any): Word[] | WordNotFound => {
  const { title } = jsonObj

  if (title) {
    const notFound: WordNotFound = { title }
    return notFound
  }

  const words: Word[] = []

  jsonObj.forEach((obj: any) => {
    const { word, phonetics, meanings } = obj

    const audioUrls: string[] = []
    if (phonetics && phonetics.length > 0) {
      phonetics.forEach((p: any) => {
        const { audio } = p
        if (audio) {
          audioUrls.push(audio)
        }
      })
    }

    const meaningsArr: string[] = []
    if (meanings && meanings.length > 0) {
      meanings.forEach((m: any) => {
        const { definitions } = m
        if (definitions && definitions.length > 0) {
          definitions.forEach((d: any) => {
            const { definition } = d
            meaningsArr.push(definition)
          })
        }
      })
    }

    const wordObj: Word = {
      term: word,
      audioUrls,
      meanings: meaningsArr,
    }
    words.push(wordObj)
  })

  return words
}

describe('English Dictionary E2E tests', () => {
  beforeEach(() => {
    cy.visit('')
    cy.fixture('apiResponse').then((value) => (this.apiResponse = value))
  })

  it('deve renderizar o número correto de cartões de palavra quando a pesquisa for realizada', () => {
    const query = 'blalala'
    cy.intercept('GET', `${Cypress.env('API_URL')}/${query}`, {
      body: this.apiResponse,
    })

    cy.performSearch(query)

    cy.get('[data-cy="word-card"]').should(
      'have.length',
      this.apiResponse.length
    )
  })

  it.only('deve mostrar os significados corretos sobre uma palavra', () => {
    const query = 'apple'
    cy.request({
      method: 'GET',
      url: `${Cypress.env('API_URL')}/${query}`,
    }).then(({ body }) => {
      const words = getWords(body)
      console.log(words)

      cy.performSearch(query)
      cy.get('[data-cy="word-details"]').first().click()

      const firstResult: Word = words[0]
      const meaningsList = cy.get('[data-cy="details-list"] > li')
      meaningsList.should('have.length', firstResult.meanings.length)

      meaningsList.then(($value) => {
        const { meanings } = firstResult

        for (let i = 0; i < meanings.length; i++) {
          expect($value[i].innerText).to.equal(meanings[i])
        }
      })
    })
  })

  it('deve reproduzir o áudio correto ao clicar no botão de reprodução de áudio', () => {
    const query = 'word'
    const apiResponse = [
      {
        term: 'word',
        audioUrls: ['http://example.com/audio1.mp3', 'http://example.com/audio2.mp3'],
        meanings: ['meaning 1', 'meaning 2'],
      },
    ]
    cy.intercept('GET', `${Cypress.env('API_URL')}/${query}`, {
      body: apiResponse,
    }).as('getWords')
  
    cy.performSearch(query)
  
    cy.wait('@getWords').then(({ response }) => {
      const word = response.body[0]
      const audioUrls = word.audioUrls
  
      cy.get('[data-cy="word-card"]').first().find('[data-cy="play-audio"]').click()
  
      cy.get('[data-cy="audio-player"]').should('be.visible')
      cy.get('[data-cy="audio-source"]').should('have.attr', 'src', audioUrls[0])
      cy.get('[data-cy="audio-player"]').trigger('play')
  
      cy.wait(2000) 
  
      cy.get('[data-cy="audio-player"]').trigger('ended')
  
      cy.get('[data-cy="audio-player"]').trigger('play')
  
      cy.wait(2000) 
  
      cy.get('[data-cy="audio-player"]').trigger('ended')
    })
  })
})
