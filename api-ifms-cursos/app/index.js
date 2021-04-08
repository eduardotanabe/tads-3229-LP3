const apiData = document.querySelector(".cursos")

async function listarCursos() {
    const url = "http://localhost:3000/cursosIFMS"
    const response = await axios.get(url)
    const cursos = response.data

    console.log(cursos)

    cursos.forEach(curso => {
        apiData.innerHTML += `
            <h2>${curso.curso}</h2>
            <p>Nível de ensino: ${curso.nivelDeEnsino} </p>
            <p>Duração: ${curso.duracao}</p>
            <p>Município: ${curso.municipio}</p>
        `
    });

}

listarCursos()