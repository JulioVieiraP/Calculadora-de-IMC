import { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = ({ Resultado }) => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const pesoNumerico = Number(peso.replace(',', '.'));
        const alturaNumerica = Number(altura.replace(',', '.'));
        if (pesoNumerico === 0 || alturaNumerica === 0) {
            alert("Digite um valor valido");
        } else {
            const imc = (pesoNumerico / (alturaNumerica * alturaNumerica)).toFixed(2);
            Resultado(imc);

        }
    }

    return (
        <>
            <form className={styles.Formulario} onSubmit={handleSubmit}>
                <div>
                    <label className={styles.label} htmlFor="peso">Peso (ex. 69,2): </label>
                    <input className={styles.input} type="number" placeholder='Quilos' onChange={e => setPeso(e.target.value)} value={peso} />
                </div>
                <div>
                    <label className={styles.label} htmlFor="altura">Altura (ex. 1,70): </label>
                    <input className={styles.input} type="number" placeholder='Metros' onChange={e => setAltura(e.target.value)} value={altura} />
                </div>

                <button className={styles.btn} type='submit'>Calcular</button>
            </form>
        </>
    )
}

export default Formulario;
