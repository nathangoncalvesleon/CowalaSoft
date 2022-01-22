import './main.css'
import Api from '../api/Api'
import React, {useState} from 'react';
import LocalStorage from '../storage/LocalStorage';

const Main = () => {
    const [getIp, setIp] = useState();
    const [dados, setDados] = LocalStorage('name');
    const [dados2, setDados2] = LocalStorage('profissao');
    const [dados3, setDados3] = LocalStorage('celular');


    
function consulta(){
    localStorage.getItem('name')
    alert("Dados Salvos!")
}

function remove() {
    setDados('')
    setDados2('')
    setDados3('')
}

    

    function pegaIp(){
        Api.get('/ip/').then((response) => {
            setIp(response.data)
        })
    }

    

  

    

    



   

    return (
        <div className="content2" >
            <div class="container" >
                <div class="col-12">
                  <label for="name">Nome</label>
                  <input type="text" id="name"  value={dados} onChange={event => setDados(event.target.value)}/>
                </div>
                 <div class="col-6">
                    <label for="pro">Profissão</label>
                    <input type="text" id="pro" value={dados2} onChange={event2 => setDados2(event2.target.value)}/>
                 </div>
                <div class="col-6">
                     <label for="cel">Celular</label>
                    <input type="text" id="cel" value={dados3} onChange={event3 => setDados3(event3.target.value)}/>
                </div>
                <div class="col">
                    <label for="ip">MEU IP</label>
                    <input  id="ip" value={getIp}/>
                 </div>
                <div class="col-auto align-end">
                    <button onClick={pegaIp}>Encontrar o meu IP</button>
                </div>

                <div class="col-bt align-self">
                    <button type='submit' onClick={consulta}>SALVAR</button>
                    
                </div>
                <div class="col-bt align-self">
                    <button onClick={remove}>LIMPAR</button>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Main;