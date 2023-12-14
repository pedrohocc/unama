export class ApiNews {
    constructor() {}

    async getNews() {
        let url = `https://codequestpoobackend.willyscampos.repl.co/news`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if(response.ok) {
            try {
                const data = await response.json();
                return data;
            } catch (error) {
                console.error(error);
                return [{title: 'Erro ao carregar as notícias', content: 'Tente novamente mais tarde'}]
            }
            
        }
    }

    async createNews(title, content) {
        let url = `https://codequestpoobackend.willyscampos.repl.co/news`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, content}),
        })
        if(response.ok) {
            try {
                const data = await response.json();
                return data;
            } catch (error) {
                console.error(error);
                throw new Error('Erro ao criar a notícia');
            }
            
        }
    }
}