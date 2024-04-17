import styles from './Tabela.module.css';

const Tabela = ({ imc }) => {
    return (
        <>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th colSpan="3">Tabela do IMC</th>
                    </tr>
                    <tr>
                        <th>Imc</th>
                        <th>Classificação</th>
                        <th>Obesidade (GRAU)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={imc > 0 && imc < 18.5 ? styles.Sucesso : ''}>
                        <td>MENOR QUE 18,5</td>
                        <td>MAGREZA</td>
                        <td>0</td>
                    </tr>
                    <tr className={imc >= 18.5 && imc < 24.9 ? styles.Sucesso : ''}>
                        <td>ENTRE 18,5 E 24,9</td>
                        <td>NORMAL</td>
                        <td>0</td>
                    </tr>
                    <tr className={imc >= 25.0 && imc < 29.9 ? styles.Sucesso : ''}>
                        <td>ENTRE 25,0 E 29,9</td>
                        <td>SOBREPESO</td>
                        <td>I</td>
                    </tr>
                    <tr className={imc >= 30.0 && imc < 39.9 ? styles.Sucesso : ''}>
                        <td>ENTRE 30,0 E 39,9</td>
                        <td>OBESIDADE</td>
                        <td>II</td>
                    </tr>
                    <tr className={imc >= 40.0 ? styles.Sucesso : ''}>
                        <td>MAIOR QUE 40,0</td>
                        <td>OBESIDADE GRAVE</td>
                        <td>III</td>
                    </tr>
                </tbody>
            </table>
            {imc && <div className={styles.resultado}>
                <span>Seu IMC: </span>
                <strong>{imc}</strong>
            </div>}
        </>
    )
}

export default Tabela;
