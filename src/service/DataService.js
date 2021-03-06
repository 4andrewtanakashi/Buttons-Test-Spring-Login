import Axios from "axios";

const URL = "http://localhost:8080";

class DataService {

    criaNonRecursiveInitial (dados) {
        console.log("DADOS VAR: " + dados.variables);
        console.log("DADOS WORD: " + dados.palavras);
        return Axios.post(`${URL}/${dados.palavra}/grammar/nonRecursiveInitial`, dados);
    }

    criaNonContracting (dados) {
        console.log("DADOS VAR: " + dados.variables);
        console.log("DADOS WORD: " + dados.palavras);
        return Axios.post(`${URL}/${dados.palavra}/grammar/nonContracting`, dados);
        }
        
    criaNonCascade (dados) {
        console.log("DADOS VAR: " + dados.variables);
        console.log("DADOS WORD: " + dados.palavras);
        return Axios.post(`${URL}/${dados.palavra}/grammar/nonCascade`, dados);
    }
    
    criaOnlyTerm (dados) {
        console.log("DADOS VAR: " + dados.variables);
        console.log("DADOS WORD: " + dados.palavras);
        return Axios.post(`${URL}/${dados.palavra}/grammar/onlyTerm`, dados);
    }
    
    criaOnlyReach (dados) {
        console.log("DADOS VAR: " + dados.variables);
        console.log("DADOS WORD: " + dados.palavras);
        return Axios.post(`${URL}/${dados.palvra}/grammar/onlyReach`, dados);
    }

    criaHTML (dados) {
        
        return Axios.post(`${URL}/grammar/HTML`, dados);
    }

    getGramatica () {
        return Axios.get(`${URL}/grammar`);
    }

    getGramaticaHTML () {
        return Axios.get(`${URL}/grammar/html`);
    }

    getConfirmUser (email) {
        return Axios.get(`${URL}/login/${email}`);
    }

    getUserByEmail (email) {
        return Axios.get(`${URL}/user/${email}`);
    }

    postSignNewUser (user) {
        return Axios.post(`${URL}/sign`, user);
    }

    test(u) {
        return Axios.post(`${URL}/register`, u);
    }

    test2(auth) {
        return Axios.get(`${URL}/test2`, auth);
    }

    login(dataLogin) {
        return Axios.post(`${URL}/login`, dataLogin);
    }

    logout() {
        return Axios.get(`${URL}/logout`);
    }

}

export default new DataService();