import { useState, useParams } from 'react';
import './Form.css';
import React from 'react';
import axios from 'axios';



function CadMus() {

    const {id} = useParams();

    const [arquivo, setArquivo] = useState("")
    const [nome, setNome] = useState("")


    function handleSubmit(e) {
        e.preventDefault();

        const musicas = {arquivo, nome}

        axios.post(`http://localhost:3001/playlists/${id}/musicas`, musicas)
            .then((res) => {
                console.log(res.data);
            })

    }

    return (
        <>

            <div id="showcase">
                <div className="showcase-container">
                    <form onSubmit={(e) => handleSubmit(e)} style={{ margin: '60px 20px 20px 130px' }}>

                        <fieldset style={{ fontSize: 'larger' }}>
                            <fieldset className="grupo" style={{ border: '0ch' }}>
                                <div className="campo">
                                    <label htmlFor="arquivo">Música</label>
                                    <input type="text" id="arquivo" onChange={(e) => setArquivo(e.target.value)} name="arquivo" style={{ width: '10em' }} />
                                </div>
                                <div className="campo">
                                    <label htmlFor="nome">Nome</label>
                                    <input type="text" id="nome" onChange={(e) => setNome(e.target.value)} name="nome" style={{ width: '10em' }} />
                                </div>
                            </fieldset>
                            <div className="submit">
                                <button type="submit" style={{ fontSize: 'large' }} name="submit">Criar</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CadMus;