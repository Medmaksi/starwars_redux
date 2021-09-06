export const service = {
    async getPlanets () {
        return fetch('https://swapi.dev/api/planets/');

    },
    getPeople () {
        return fetch('https://swapi.dev/api/people/');
    },

    async getPerson (id) {
        const res = await fetch(`https://swapi.dev/api/people/${id}`)
        return res.json()
    },

    async getPlanet (id) {
        const res = await fetch(`https://swapi.dev/api/planets/${id}`)
        return res.json();
    }
}
